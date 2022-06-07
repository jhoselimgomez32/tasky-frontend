import { Box } from '@mui/material';
import React from 'react';
import axios from 'axios';
import Modal from './forms/AddTagForm';

/** Componente dummy usando el API dummy de Tasky */
class TagPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/tags').then((res) => {
      const tags = res.data;
      this.setState({ tags });
    });
  }

  render() {
    const { tags } = this.state;
    return (
      <div>
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <h1>Tags</h1>
          <ul>
            {tags.map((tag) => (
              <li>
                <b>{tag.name}</b>
                <p>{tag.color}</p>
              </li>
            ))}
          </ul>
        </Box>
        <Modal />
      </div>
    );
  }
}

export default TagPage;
