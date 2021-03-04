import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import UserService from '../services/user.service.js';

class SupervisorDashboard extends Component {
  
  state = {
    arr: ["rama", "shyama"],
    responseData: '',
  }

  componentDidMount = async () => {
    // call component specific api here
        const { user: currentUser={} } = this.props;

    try {


	const response = await UserService.getModeratorBoard(currentUser.email);

	console.log(' response',response)

	const {status,data} = response;
	if(status === 200){
		this.setState({
			
			responseData: data
		});
	}


}catch(e){
	console.log(' errror ',e)
}
  }
  
  render() {  
  	const {arr} = this.state;
    return (
    	<>
    	<h3> Welcome to Supervisor dashboard</h3>
    	<h4>{this.state.responseData}</h4>
    	<ul>
          { arr.map((role, index) =><li key={index}>{role}</li>)}
        </ul>
        </>
    );
  }
}

export default SupervisorDashboard;