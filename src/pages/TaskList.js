import { Box } from '@mui/material';
import React from 'react';
import axios from 'axios';

/** Componente dummy usando el API dummy de Tasky */
class TaskListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklists: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/tasklist').then((res) => {
      const tasklists = res.data;
      this.setState({ tasklists });
    });
  }

  render() {
    const { tasklists } = this.state;
    return (
      <div>
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <h1>Lista de tareas</h1>
          <ul>
            {tasklists.map((tasklist) => (
              <li>
                <b>{tasklist.name}</b>
                <p>{tasklist.color}</p>
              </li>
            ))}
          </ul>
        </Box>
      </div>
    );
  }
}

export default TaskListPage;
