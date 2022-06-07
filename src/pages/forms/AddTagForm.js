// import { Box } from '@mui/material';
import {
  AppBar,
  Button,
  Dialog,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import axios from 'axios';

/** Componente dummy usando el API dummy de Tasky */
class AddTagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      response: {},
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit(event) {
    const targetname = event.target.name;
    const targetcolor = event.target.color;
    /* this.setState({
      [targetname]: targetname,
    }); */

    axios
      .post('http://localhost:8080/tags', {
        name: targetname.value,
        color: targetcolor.value,
      })
      .then((res) => {
        const tag = res.data;
        console.log('tag: ', tag);
        this.state.response = tag;
      });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Agregar Etiqueta
        </Button>
        <Dialog fullScreen open={open} onClose={this.handleClose}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="App-body" id="App-body">
                <div>
                  <Grid
                    container
                    rowSpacing={5}
                  >
                    <Grid item md={12}>
                      <FormControl>
                        <TextField
                          id="name"
                          name="name"
                          label="Nombre"
                          variant="filled"
                          required
                        />
                        <FormHelperText id="my-helper-text">
                          Nombre de la etiqueta
                        </FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item md={12}>
                      <FormControl>
                        <TextField
                          id="color"
                          name="color"
                          label="Color"
                          variant="filled"
                        />
                        <FormHelperText id="my-helper-text">
                          Color de la etiqueta
                        </FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item md={12}>
                      <Button variant="contained" color="primary" type="submit">
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default AddTagForm;

/* import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, FormControlLabel, Input } from '@mui/material';

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="App-body" id="App-body">
              <div>
                <FormControl>
                  <FormControl htmlFor="my-input">Email address</FormControl>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <FormControlLabel id="my-helper-text">Text.</FormControlLabel>
                </FormControl>
              </div>
            </div>
            <div className="App-button">
              <input className="button" type="submit" value="ENVIAR" />
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
 */
