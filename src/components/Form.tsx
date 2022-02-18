import { VFC, useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const Form: VFC = () => {
  // ランダムに wikipedea の情報を取得
  useEffect(() => {
    axios.get('https://ja.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&grnlimit=2&prop=info&format=json&origin=*').then((res) => {
      // const a = res;
      console.log(res);
    });
  });

  return (
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
        </form>
      </Grid>
      <Grid>
        <Button variant="contained" color="primary" size="large">
          Push!
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
