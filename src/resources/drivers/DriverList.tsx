// resources/drivers/DriverList.tsx
import { List, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const DriverList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="license_number" />
            <DateField source="license_expiry" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

