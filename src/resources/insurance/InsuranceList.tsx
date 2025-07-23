// resources/insurance/InsuranceList.tsx
import { List, Datagrid, TextField, DateField, NumberField, EditButton } from 'react-admin';

export const InsuranceList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="policy_number" />
            <TextField source="insured_item_type" />
            <TextField source="insured_item_id" />
            <TextField source="provider" />
            <NumberField source="coverage_amount" options={{ style: 'currency', currency: 'USD' }} />
            <DateField source="valid_from" />
            <DateField source="expires_on" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);
