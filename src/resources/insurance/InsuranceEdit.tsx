// resources/insurance/InsuranceEdit.tsx
import { Edit, SimpleForm, TextInput, DateInput, NumberInput, SelectInput } from 'react-admin';

export const InsuranceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="policy_number" />
            <SelectInput source="insured_item_type" choices={[
                { id: 'vehicle', name: 'Vehicle' },
                { id: 'driver', name: 'Driver' },
                { id: 'cargo', name: 'Cargo' },
            ]} />
            <TextInput source="insured_item_id" />
            <TextInput source="provider" />
            <NumberInput source="coverage_amount" />
            <DateInput source="valid_from" />
            <DateInput source="expires_on" />
            <SelectInput source="status" choices={[
                { id: 'active', name: 'Active' },
                { id: 'expired', name: 'Expired' },
                { id: 'pending', name: 'Pending' },
            ]} />
        </SimpleForm>
    </Edit>
);