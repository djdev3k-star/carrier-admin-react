// src/resources/drivers.tsx
import React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from "react-admin";

export const DriverList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="licenseNumber" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

export const DriverEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="licenseNumber" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export const DriverCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="licenseNumber" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);
