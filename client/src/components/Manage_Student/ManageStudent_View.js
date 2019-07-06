
import React, { Component } from "react";
import { connect } from "react-redux";

import {Actions} from 'react-native-router-flux';
import ShowStudent from './Show_Student'
import AddStudent from './Add_Students'
import BottomNav from './Bottom_Navigation'
import { manageStudentServer } from '../../server/LoginServer';
import { manage_Status } from '../../constants/ManageStudent';
import { manage_Actions } from '../../constants/ManageStudent'
import {View,StyleSheet,Alert} from 'react-native';
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    manage_Status: state.manage_Reducer.manage_Status,
   // userId:state.login_Reducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleSignIn: (username,password) => { dispatch(manageStudentServer.handleSignIn(username,password)) },
    handleAddClick : () =>{ dispatch({ type: manage_Actions.manage_student.ADDSTUDENT }) }
  };
};

class ManageView extends Component {
  constructor(props) {
    super(props);
   this.state = {};
   //this.handleRegister = this.handleRegister.bind(this);

}

  getScreen(status) {
    console.log("I am from Manage Student Component getScreen: " + status);
    switch (status) {
     
      case manage_Status.manage_student.NEW:
      alert("Show Student");
        return (
          <BottomNav />
          // <ShowStudent  handleAddClick={this.props.handleAddClick} />
          // <AddStudent  />

        );
       break;
        
        case manage_Status.manage_student.ADDSTUDENT:
        alert("Add Student");
          return (
            <AddStudent  />
          );
          break;
      
        
    }
  }

  render() {
    return (
      <View style={{flexGrow:1}}>
          {this.getScreen(this.props.manage_Status)}
          </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
