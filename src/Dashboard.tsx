import * as React from 'react';
import {
    Card, CardContent, CardHeader, Typography, Box, CircularProgress,
    List, ListItem, ListItemText, Badge, Alert, Stack
} from '@mui/material';
import { DirectionsCar, AssignmentLate, Warning } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const mockData = {
    drivers: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }],
    vehicles: [
        { id: 1, status: 'Available' },
        { id: 2, status: 'In Maintenance' },
        { id: 3, status: 'In Use' }
    ],
    compliance: [
        { id: 1, doc: 'Driver’s License Renewal', due: '2025-08-01' },
        { id: 2, doc: 'Vehicle Inspection', due: '2025-08-15' }
    ],
    maintenance: [
        { id: 1, vehicle: 'Truck A', issue: 'Oil change overdue' },
        { id: 2, vehicle: 'Van B', issue: 'Brake pads low' }
    ]
};

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setStats(mockData);
            setLoading(false);
        }, 800);
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box p={2} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))" gap={3}>
            <Card>
                <CardHeader title="Active Drivers" />
                <CardContent>
                    <Badge badgeContent={stats.drivers.length} color="primary">
                        <Typography variant="h5">Drivers</Typography>
                    </Badge>
                    <List dense>
                        {stats.drivers.map((driver: any) => (
                            <ListItem key={driver.id}>
                                <ListItemText primary={driver.name} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Vehicles by Status" />
                <CardContent>
                    <Stack spacing={1}>
                        <Badge badgeContent={stats.vehicles.filter((v: any) => v.status === 'Available').length} color="success">
                            <Typography>Available</Typography>
                        </Badge>
                        <Badge badgeContent={stats.vehicles.filter((v: any) => v.status === 'In Use').length} color="info">
                            <Typography>In Use</Typography>
                        </Badge>
                        <Badge badgeContent={stats.vehicles.filter((v: any) => v.status === 'In Maintenance').length} color="warning">
                            <Typography>In Maintenance</Typography>
                        </Badge>
                    </Stack>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Upcoming Compliance Deadlines" avatar={<AssignmentLate />} />
                <CardContent>
                    {stats.compliance.map((c: any) => (
                        <Alert severity="info" key={c.id}>
                            {c.doc} — Due {c.due}
                        </Alert>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Maintenance Alerts" avatar={<Warning />} />
                <CardContent>
                    {stats.maintenance.map((m: any) => (
                        <Alert severity="warning" key={m.id}>
                            {m.vehicle}: {m.issue}
                        </Alert>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
};

export default Dashboard;
