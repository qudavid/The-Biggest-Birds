import react from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Container } from '@mui/material';
import React from 'react';

import { FileUpload } from '..';
import Form from '../Form/Form';

const Create = () => (
  <>
    <Container maxWidth="xl" >
      <Grid container spacing={3} padding="20px">
        <Grid item xs={12} md={6} lg={12}>
          <Typography variant="h2" color="textPrimary" textAlign="center" gutterBottom>
                <strong>Be real, be moody.</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <Card style={{ maxWidth: 800, margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h6" color="textPrimary" component="p" textAlign="center" gutterBottom>
                Describe your day and we will generate an abstract art of your mood.
              </Typography>
              <Form />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default Create;

