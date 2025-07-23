// resources/routes/RouteList.tsx
import { List, Datagrid, TextField, DateField, EditButton, ReferenceField } from 'react-admin';

export const RouteList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="route_number" />
            <ReferenceField source="driver_id" reference="drivers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="vehicle_id" reference="vehicles">
                <TextField source="unit_number" />
            </ReferenceField>
            <TextField source="origin" />
            <TextField source="destination" />
            <DateField source="scheduled_departure" />
            <DateField source="scheduled_arrival" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);