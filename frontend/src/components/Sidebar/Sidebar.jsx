import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const blueLogo = 'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png';
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
        <Link className={classes.links} to="/">
          <ListItem>
            <ListItemText primary="Create" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.links} to="/logs">
          <ListItem>
            <ListItemText primary="Logs" />
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default Sidebar;
