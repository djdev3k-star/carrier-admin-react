// src/resources/insurance.tsx
import React from "react";
import { List, Datagrid, TextField, DateField, EditButton, Edit, SimpleForm, TextInput, DateInput, Create } from "react-admin";

export const InsuranceList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="policyNumber" />
            <TextField source="provider" />
            <DateField source="expirationDate" />
            <EditButton />
        </Datagrid>
    </List>
);

export const InsuranceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="policyNumber" />
            <TextInput source="provider" />
            <DateInput source="expirationDate" />
        </SimpleForm>
    </Edit>
);

export const InsuranceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="policyNumber" />
            <TextInput source="provider" />
            <DateInput source="expirationDate" />
        </SimpleForm>
    </Create>
);
