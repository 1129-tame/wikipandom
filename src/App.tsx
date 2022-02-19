import { VFC } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Box from '@material-ui/core/Box';
import Form from './components/Form';
// import logo from './logo.svg';
import './App.css';
import pic from './images/logo2.png';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App: VFC = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="md">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Typography component="div">
          <img src={pic} alt="pictur" />
          {/* <Box fontSize={80} m={1} fontStyle="oblique">
            Wikipandom
          </Box> */}
        </Typography>
        <Form />
      </Grid>
    </Container>
  </ThemeProvider>
);

export default App;
