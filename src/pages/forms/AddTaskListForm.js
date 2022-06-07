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

/** Componente dummy usando el API dummy de TaskList */
class AddTaskListForm extends React.Component {
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
    const targetuserid = event.target.userId;
    console.log('targetname.value: ', targetname.value);
    console.log('targetuserid.value: ', targetuserid.value);

    axios
      .post('http://localhost:8080/tasklist', {
        name: targetname.value,
        userId: targetuserid.value,
      })
      .then((res) => {
        const taskList = res.data;
        console.log('TaskList: ', taskList);
        this.state.response = taskList;
      });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Crear Lista Tarea
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
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="App-body" id="App-body">
                <div>
                  <Grid container rowSpacing={5}>
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
                          Nombre de la Lista de tarea
                        </FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item md={12}>
                      <FormControl>
                        <TextField
                          id="userId"
                          name="userId"
                          label="Usuario"
                          variant="filled"
                          required
                        />
                        <FormHelperText id="my-helper-text">
                          Identificador de usuario
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

export default AddTaskListForm;
