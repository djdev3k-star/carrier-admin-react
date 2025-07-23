import * as React from 'react';
import { Admin, Resource } from 'react-admin';
// import { ThemeProvider } from '@mui/material/styles';  <-- optional, usually not needed if using Admin theme prop
import myTheme from './theme';
import Layout from './Layout';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';
import { DriverList, DriverEdit, DriverCreate } from './resources/drivers';
import { VehicleList, VehicleEdit, VehicleCreate } from './resources/vehicles';
import { ComplianceList, ComplianceEdit, ComplianceCreate } from './resources/compliance'; // <-- fixed here
import { RouteList, RouteEdit, RouteCreate } from './resources/routes';
import { MaintenanceList, MaintenanceEdit, MaintenanceCreate } from './resources/maintenance';
import { InsuranceList, InsuranceEdit, InsuranceCreate } from './resources/insurance';

const App = () => (
    <Admin
        dataProvider={dataProvider}
        layout={Layout}
        dashboard={Dashboard}
        theme={myTheme} // pass theme here
    >
        <Resource name="drivers" list={DriverList} edit={DriverEdit} create={DriverCreate} />
        <Resource name="vehicles" list={VehicleList} edit={VehicleEdit} create={VehicleCreate} />
        <Resource name="compliance" list={ComplianceList} edit={ComplianceEdit} create={ComplianceCreate} />
        <Resource name="routes" list={RouteList} edit={RouteEdit} create={RouteCreate} />
        <Resource name="maintenance" list={MaintenanceList} edit={MaintenanceEdit} create={MaintenanceCreate} />
        <Resource name="insurance" list={InsuranceList} edit={InsuranceEdit} create={InsuranceCreate} />
    </Admin>
);

export default App;
