import { VFC } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const Form: VFC = () => (
  <Grid
    container
    spacing={3}
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={12}>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="name" fullWidth />
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </form>
    </Grid>
    <Grid>
      <Button variant="contained" color="primary" size="large">
        Push!
      </Button>
    </Grid>
  </Grid>
);

export default Form;
