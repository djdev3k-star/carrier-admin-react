// src/resources/drivers.tsx
import React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from "react-admin";
import { DateInput, SelectInput } from 'react-admin';

export const DriverList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="license_number" />
            <DateField source="license_expiry" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

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
