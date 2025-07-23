// resources/compliance/ComplianceCreate.tsx
import { Create, SimpleForm, TextInput, DateInput, SelectInput, NumberInput } from 'react-admin';

export const ComplianceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
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
    </Create>
);