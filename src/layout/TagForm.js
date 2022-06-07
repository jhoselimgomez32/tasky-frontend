import {
  FormControl, FormHelperText, Input, InputLabel,
} from '@mui/material';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="App-body" id="App-body">
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Text.</FormHelperText>
              </FormControl>
            </div>
          </div>
          <div className="App-button">
            <input className="button" type="submit" value="ENVIAR" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
