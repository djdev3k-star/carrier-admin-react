import * as React from 'react';
import { Layout, AppBar, UserMenu, Menu } from 'react-admin';
import { Typography } from '@mui/material';

const CustomAppBar = (props) => (
  <AppBar {...props}>
    <Typography variant="h6" sx={{ flex: 1 }}>Fleet Compliance Portal</Typography>
    <UserMenu />
  </AppBar>
);

const CustomMenu = (props) => (
  <Menu {...props} />
);

const CustomLayout = (props) => (
  <Layout
    {...props}
    appBar={CustomAppBar}
    menu={CustomMenu}
  />
);

export default CustomLayout;
