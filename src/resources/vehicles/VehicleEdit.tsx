// resources/vehicles/VehicleEdit.tsx
import { Edit, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';

export const VehicleEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="unit_number" />
            <TextInput source="vin" />
            <SelectInput source="type" choices={[
                { id: 'tractor', name: 'Tractor' },
                { id: 'trailer', name: 'Trailer' },
                { id: 'box_truck', name: 'Box Truck' },
            ]} />
            <TextInput source="license_plate" />
            <DateInput source="registration_expiry" />
            <SelectInput source="status" choices={[
                { id: 'in_service', name: 'In Service' },
                { id: 'maintenance', name: 'Maintenance' },
                { id: 'retired', name: 'Retired' },
            ]} />
        </SimpleForm>
    </Edit>
);