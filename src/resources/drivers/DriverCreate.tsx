// resources/drivers/DriverCreate.tsx
import { Create, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';

export const DriverCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="license_number" />
            <DateInput source="license_expiry" />
            <SelectInput source="status" choices={[
                { id: 'active', name: 'Active' },
                { id: 'suspended', name: 'Suspended' },
                { id: 'on_leave', name: 'On Leave' },
            ]} />
        </SimpleForm>
    </Create>
);
