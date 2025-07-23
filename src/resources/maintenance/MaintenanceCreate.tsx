// resources/maintenance/MaintenanceCreate.tsx
import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, AutocompleteInput } from 'react-admin';

export const MaintenanceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="vehicle_id" reference="vehicles">
                <AutocompleteInput optionText="unit_number" />
            </ReferenceInput>
            <TextInput source="service_type" />
            <DateInput source="service_date" />
            <DateInput source="next_due" />
            <TextInput source="provider" />
            <TextInput source="notes" />
        </SimpleForm>
    </Create>
);