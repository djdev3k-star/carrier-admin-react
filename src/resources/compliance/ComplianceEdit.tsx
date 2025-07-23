// resources/compliance/ComplianceEdit.tsx
import { Edit, SimpleForm, TextInput, DateInput, SelectInput, NumberInput } from 'react-admin';

export const ComplianceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="type" />
            <SelectInput source="related_to" choices={[
                { id: 'vehicle', name: 'Vehicle' },
                { id: 'driver', name: 'Driver' },
                { id: 'carrier', name: 'Carrier' },
            ]} />
            <NumberInput source="reference_id" />
            <TextInput source="document_url" />
            <DateInput source="issued_date" />
            <DateInput source="expires_on" />
            <SelectInput source="status" choices={[
                { id: 'valid', name: 'Valid' },
                { id: 'expired', name: 'Expired' },
                { id: 'pending', name: 'Pending' },
            ]} />
        </SimpleForm>
    </Edit>
);