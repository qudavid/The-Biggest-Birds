import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import axios from 'axios';

const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('');

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSignIn = async () => {
    setIsAuthenticated((prev) => !prev);
    await axios.post('http://127.0.0.1:5000/addrec', {
      username: name,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSignIn}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField onChange={handleInput} label="What's your name?" multiline rows={1} placeholder="Type your name here" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <Button type="generate" variant="contained" color="primary" fullWidth href="/mylog/:id">Login</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignIn;
