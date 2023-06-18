import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';

const Create = () => {
  console.log('create');

  return (
    <div className="App">
      <Grid paddingTop="200px">
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
                  <TextField label="How was your day" multiline rows={10} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="generate" variant="contained" color="primary" onClick={() => {}} fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Create;
