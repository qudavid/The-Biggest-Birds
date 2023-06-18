import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { CharacterInformation, Logs, MyLog, Create, NavBar, MoodInformation } from './';
import useStyles from './styles';

const app = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/character/:id">
            <CharacterInformation />
          </Route>
          <Route exact path="/mood/:id">
            <MoodInformation />
          </Route>
          <Route exact path="/Logs">
            <Logs />
          </Route>
          <Route exact path="/MyLog">
            <MyLog />
          </Route>
          <Route exact path="/">
            <Create />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default app;
