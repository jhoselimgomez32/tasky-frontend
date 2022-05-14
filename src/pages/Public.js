import React from 'react';
import { Outlet } from 'react-router-dom';

class PublicPage extends React.PureComponent {
  render() {
    return <Outlet />;
  }
}

export default PublicPage;
