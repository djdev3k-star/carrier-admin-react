// src/resources/maintenance.tsx
import React from "react";
import { List, Datagrid, TextField, DateField, EditButton, Edit, SimpleForm, TextInput, DateInput, Create } from "react-admin";

export const MaintenanceList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="vehicleId" />
            <TextField source="type" />
            <DateField source="date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MaintenanceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="vehicleId" />
            <TextInput source="type" />
            <DateInput source="date" />
        </SimpleForm>
    </Edit>
);

export const MaintenanceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="vehicleId" />
            <TextInput source="type" />
            <DateInput source="date" />
        </SimpleForm>
    </Create>
);
