// resources/compliance/ComplianceList.tsx
import { List, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const ComplianceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="type" />
      <TextField source="related_to" />
      <TextField source="reference_id" />
      <TextField source="document_url" />
      <DateField source="issued_date" />
      <DateField source="expires_on" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);