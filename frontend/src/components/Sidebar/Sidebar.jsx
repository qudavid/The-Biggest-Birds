import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const blueLogo = 'https://img.favpng.com/9/15/6/white-sea-chevrolet-small-block-engine-white-house-organization-industry-png-favpng-v8m6DfgQy5cMJpWm7W9wrKx3K_t.jpg';
const redLogo = 'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Create</ListSubheader>
      </List>
      <Divider />
      <List>
        <ListSubheader>My Logs</ListSubheader>
      </List>
    </>
  );
};

export default Sidebar;
