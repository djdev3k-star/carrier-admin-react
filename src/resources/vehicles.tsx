// src/resources/vehicles.tsx
import React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from "react-admin";

export const VehicleList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="vin" />
            <EditButton />
        </Datagrid>
    </List>
);

export const VehicleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="make" />
            <TextInput source="model" />
            <TextInput source="year" />
            <TextInput source="vin" />
        </SimpleForm>
    </Edit>
);

export const VehicleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="make" />
            <TextInput source="model" />
            <TextInput source="year" />
            <TextInput source="vin" />
        </SimpleForm>
    </Create>
);
