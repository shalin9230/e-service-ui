import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


class CustomerDashboard extends Component {

  componentDidMount() {
    // call component specific api here
  }
  
  render() {  
    return (
    	<h3> Welcome to Customer dashboard</h3>
    );
  }
}

export default CustomerDashboard;