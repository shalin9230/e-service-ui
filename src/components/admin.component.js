import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


class AdminDashboard extends Component {

  componentDidMount() {
    // call component specific api here
  }
  
  render() {  
    return (
    	<h3> Welcome to Admin dashboard</h3>
    );
  }
}

export default AdminDashboard;