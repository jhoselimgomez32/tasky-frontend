import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {this.props.children}
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default Layout;
