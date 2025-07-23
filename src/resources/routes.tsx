// src/resources/routes.tsx
import React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from "react-admin";

export const RouteList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="origin" />
            <TextField source="destination" />
            <TextField source="distance" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RouteEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="origin" />
            <TextInput source="destination" />
            <TextInput source="distance" />
        </SimpleForm>
    </Edit>
);

export const RouteCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="origin" />
            <TextInput source="destination" />
            <TextInput source="distance" />
        </SimpleForm>
    </Create>
);
