import { VFC } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from './components/Form';
// import logo from './logo.svg';
import './App.css';

const App: VFC = () => (
  <Container maxWidth="sm">
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Typography component="div">
        <Box fontSize={150} m={1} fontStyle="oblique">
          Wikipandom
        </Box>
      </Typography>
      <Form />
    </Grid>
  </Container>
);

export default App;
