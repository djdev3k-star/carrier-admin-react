// resources/drivers/DriverEdit.tsx
import { Edit, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';

export const DriverEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="license_number" />
            <DateInput source="license_expiry" />
            <SelectInput source="status" choices={[
                { id: 'active', name: 'Active' },
                { id: 'suspended', name: 'Suspended' },
                { id: 'on_leave', name: 'On Leave' },
            ]} />
        </SimpleForm>
    </Edit>
);

