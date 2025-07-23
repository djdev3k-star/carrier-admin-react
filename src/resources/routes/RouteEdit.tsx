// resources/routes/RouteEdit.tsx
import { Edit, SimpleForm, TextInput, DateTimeInput, SelectInput, ReferenceInput, AutocompleteInput } from 'react-admin';

export const RouteEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="route_number" />
            <ReferenceInput source="driver_id" reference="drivers">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="vehicle_id" reference="vehicles">
                <AutocompleteInput optionText="unit_number" />
            </ReferenceInput>
            <TextInput source="origin" />
            <TextInput source="destination" />
            <DateTimeInput source="scheduled_departure" />
            <DateTimeInput source="scheduled_arrival" />
            <SelectInput source="status" choices={[
                { id: 'scheduled', name: 'Scheduled' },
                { id: 'en_route', name: 'En Route' },
                { id: 'completed', name: 'Completed' },
                { id: 'cancelled', name: 'Cancelled' },
            ]} />
        </SimpleForm>
    </Edit>
);