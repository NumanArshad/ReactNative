
import React, { Component } from "react";
import { connect } from "react-redux";

import {Actions} from 'react-native-router-flux';
import Login from './Login_SignIn'
//import LoginSuccess from './Login_Success'
import { loginServer } from '../../server/LoginServer';
import { login_Status } from '../../constants/Login';
import { login_Actions } from '../../constants/Login'
import {View,StyleSheet,Alert} from 'react-native';
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    login_status: state.login_Reducer.login_status,
    userId:state.login_Reducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleSignIn: (username,password) => { dispatch(loginServer.handleSignIn(username,password)) },
    handleBackClick : () =>{ dispatch({ type: login_Actions.login_SignIn.NEW }) }
  };
};

class LoginView extends Component {
  constructor(props) {
    super(props);
   this.state = {};
   //this.handleRegister = this.handleRegister.bind(this);

}

  getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
     
      case login_Status.login_SignIn.NEW:
      alert("Login new");
        return (
          <Login handleSignIn={this.props.handleSignIn} />
        );
        break;
  
      case login_Status.login_SignIn.AUTHORIZED:
      alert("authorize")
     Actions.classesComponent()

     // this.props.history.push('/todoView/'+this.props.userId);
        // return (

        // //  <LoginSuccess handleBackClick={this.props.handleBackClick} />
        // );
        break;
        
    }
  }

  render() {
    return (
      <View style={{flexGrow:1}}>
          {this.getScreen(this.props.login_status)}
          </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
