import React from "react";
import { Outlet } from "react-router-dom";

class PublicPage extends React.Component {
  render() {
    return <Outlet />;
  }
}

export default PublicPage;
