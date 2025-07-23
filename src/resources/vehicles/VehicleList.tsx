// resources/vehicles/VehicleList.tsx
import { List, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const VehicleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="unit_number" />
      <TextField source="vin" />
      <TextField source="type" />
      <TextField source="license_plate" />
      <DateField source="registration_expiry" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);