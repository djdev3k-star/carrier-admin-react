// resources/maintenance/MaintenanceList.tsx
import { List, Datagrid, TextField, DateField, EditButton, ReferenceField } from 'react-admin';

export const MaintenanceList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="vehicle_id" reference="vehicles">
                <TextField source="unit_number" />
            </ReferenceField>
            <TextField source="service_type" />
            <DateField source="service_date" />
            <DateField source="next_due" />
            <TextField source="provider" />
            <TextField source="notes" />
            <EditButton />
        </Datagrid>
    </List>
);