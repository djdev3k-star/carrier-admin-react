// resources/maintenance/MaintenanceEdit.tsx
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, AutocompleteInput } from 'react-admin';

export const MaintenanceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="vehicle_id" reference="vehicles">
                <AutocompleteInput optionText="unit_number" />
            </ReferenceInput>
            <TextInput source="service_type" />
            <DateInput source="service_date" />
            <DateInput source="next_due" />
            <TextInput source="provider" />
            <TextInput source="notes" />
        </SimpleForm>
    </Edit>
);