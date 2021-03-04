import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import UserService from '../services/user.service.js';

class SupervisorDashboard extends Component {
  

  componentDidMount() {
    // call component specific api here
  }


  
  render() {  
    return (
    	<h3> Welcome to Supervisor dashboard</h3>
    
    );
  }
}

export default SupervisorDashboard;