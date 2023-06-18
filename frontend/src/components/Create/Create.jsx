import React, { useRef } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { FileUpload } from '..';

import useStyles from './styles';

const Create = () => {
  const valueRef = useRef('');

  const classes = useStyles();

  const postMessage = async () => {
    await axios.post('http://127.0.0.1:5000/message', {
      message: valueRef.current.value,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container className={classes.containerSpaceAround} paddingTop="100px">
      <Grid container item sm={12} lg={4} style={{ display: 'flex', marginBottom: '30px', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Mood
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Describe your day and we will generate an abstract art of your mood.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField label="How was your day" multiline rows={20} placeholder="Type your message here" variant="outlined" inputRef={valueRef} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="generate" variant="contained" color="primary" onClick={postMessage} fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container direction="column" lg={7} justifyContent="center">
        <Card style={{ maxWidth: 450, padding: '200px 100px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Mood
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Upload a video of your day.
            </Typography>
            <FileUpload />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Create;
