import React from 'react';

import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children,
    } = this.props;
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default Layout;
