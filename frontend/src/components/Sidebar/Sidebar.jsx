import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const blueLogo = 'https://www.adobe.com/express/learn/blog/media_196e5176585a00903655922c802ee1e507bb0a6e8.png?width=750&format=png&optimize=medium';
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
