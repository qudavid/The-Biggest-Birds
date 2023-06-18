import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import blueLogo from "../../assets/dark-logo.png";
import redLogo from "../../assets/light-logo.png";

import useStyles from './styles';
import "./style.css";



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
      
      <List>
        <div className="slide">
          <Link className={classes.links} to="/">
            <ListItem>
              <ListItemText primary="Create" disableTypography={true} style={{padding:"5%", fontSize:"1.25em"}}/>
            </ListItem>
          </Link>
        </div>
      </List>
      
      <List>
        <div className="slide">
          <Link className={classes.links} to="/logs">
            <ListItem>
              <ListItemText primary="Logs" disableTypography={true} style={{padding:"5%", fontSize:"1.25em"}}/>
            </ListItem>
          </Link>
        </div>
      </List>
    </>
  );
};

export default Sidebar;
