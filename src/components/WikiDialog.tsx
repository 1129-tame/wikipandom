import { VFC, useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import { ArticleModel } from '../model/article-model';

// 受け取る props の型を定義
interface WikiDialogProps {
  article: ArticleModel;
}

interface responce {
    data: {
      parse: {
        text: {
          '*': string
        }
      }
    }
  }

const useStyles = makeStyles((theme: Theme) => createStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const WikiDialog = (
  props: WikiDialogProps,
) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState<string>('');
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');

  const { article } = props;
  const textApi = `https://ja.wikipedia.org/w/api.php?action=parse&pageid=${article.pageid}&prop=text&format=json&origin=*`;

  const handleClickOpen = () => {
    const getText = async () => {
      const res = await axios.get(textApi);
      const responceData: responce = res;
      console.log(responceData.data);
      const textData = responceData.data.parse.text['*'];
      setText(textData);
      setOpen(true);
    };
    getText();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMaxWidth(event.target.value as DialogProps['maxWidth']);
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>記事を読む</Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false as never}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
              label="Full width"
            />
          </form>
          {parse(text)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WikiDialog;
