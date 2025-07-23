// src/resources/compliance.tsx
import React from "react";
import { List, Datagrid, TextField, DateField, EditButton, Edit, SimpleForm, TextInput, DateInput, Create } from "react-admin";

export const ComplianceList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="driverId" />
            <TextField source="documentType" />
            <DateField source="expirationDate" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ComplianceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="driverId" />
            <TextInput source="documentType" />
            <DateInput source="expirationDate" />
        </SimpleForm>
    </Edit>
);

export const ComplianceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="driverId" />
            <TextInput source="documentType" />
            <DateInput source="expirationDate" />
        </SimpleForm>
    </Create>
);
