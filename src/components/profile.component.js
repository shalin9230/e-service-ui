import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import SupervisorDashboard from "./supervisor.component.js";
import AdminDashboard from "./admin.component.js";

const ROLE_ADMIN = 'ROLE_ADMIN';
const ROLE_SUPERVISOR = 'ROLE_SUPERVISOR';

class Profile extends Component {


  isAccess = (roleType) => {
    const { user: currentUser } = this.props;
    const {roles=[]} = currentUser;
    return roles.indexOf(roleType) !== -1;
  }

  render() {
    const { user: currentUser } = this.props;
    console.log(currentUser);
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          {this.isAccess(ROLE_SUPERVISOR) === true && 
            <SupervisorDashboard 
              {...this.props}
            />
          }

          {this.isAccess(ROLE_ADMIN) === true && 
            <AdminDashboard
              {...this.props}
             />
          }
        </header>
        
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(' state',state)
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
