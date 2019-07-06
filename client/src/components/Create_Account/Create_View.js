
import React, { Component } from "react";
import { connect } from "react-redux";

//import Create_Failure from './Create_Failure'
//import Create_Loading from './Create_Loading'
import Register from './Create_Account'
import AttendenceSheet from './Attendance_Sheet';
//import Create_Success from './Create_Success'
import { registerServer } from '../../server/RegisterServer';
import { register_Status } from '../../constants/Register';
import { register_Actions } from '../../constants/Register';
import {View,StyleSheet,Alert} from 'react-native';
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    register_status: state.register_Reducer.register_status,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleRegister: (username,password) => { dispatch(registerServer.handleRegister(username,password)) },
   Show : () => { dispatch({ type: register_Actions.register_Create.CREATED }) },
   main : () => { dispatch({ type: register_Actions.register_Create.NEW }) },
    
  };
};



class CreateView extends Component {
  constructor(props) {
      super(props);
     this.state = {};
     this.handleRegister = this.handleRegister.bind(this);

  }

handleRegister(u,p){

  this.props.handleRegister(u,p)
  //this.props.Show();
 Alert.alert("in parent");
}
  getScreen(status) {
    console.log("I am from register Component getScreen: " + status);
    switch (status) {
      case register_Status.register_Create.NEW:
      alert("haNew");
        return (
          <Register handleRegister={this.props.handleRegister} />
        );
        break;
        case register_Status.register_Create.ShowPage:
        console.log('hahahahah');
        return (
          <AttendenceSheet back={this.props.main}/>
        );
        break;
        
    
    }
  }

  render() {
    return (
      <View  style={styles.container}>
          {this.getScreen(this.props.register_status)}
          </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateView);

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
   
  },})


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
