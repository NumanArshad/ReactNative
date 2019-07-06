
import React, { Component } from "react";
import { connect } from "react-redux";
import ShowClasses from './Show_Class'
import MyComponent from './BottomN'
import AppNavigator from './Navigation'
import { classServer } from '../../server/ClassServer';
import { class_Status } from '../../constants/Class';
import { class_Actions } from '../../constants/Class';
import {View,StyleSheet,Alert} from 'react-native';
import Direction from './Orientation'
//import {Modal} from 'react-native-modal'
//import ModalTester from 'react-native-modal'
import FAB from './BuiltIn'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    class_Status: state.class_Reducer.class_Status,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

   // handleRegister: (username,password) => { dispatch(classServer.handleRegister(username,password)) },
  //  Show : () => { dispatch({ type: register_Actions.register_Create.CREATED }) },
  //  main : () => { dispatch({ type: register_Actions.register_Create.NEW }) },
    
  };
};



class ClassView extends Component {
  constructor(props) {
      super(props);
     this.state = {};

  }


  getScreen(status) {
    console.log("I am from Class Component getScreen: " + status);
    switch (status) {
      case class_Status.class_handle.SHOWCLASSES:
      alert("in show classes child ");
        return (
          // <MyComponent />
          // <Direction />
  <ShowClasses  />
  // <FAB />
  // <ModalTester />
        );
        break;
     
        
    
    }
  }

  render() {
    return (
      <View  style={styles.container}>
          {this.getScreen(this.props.class_Status)}
          </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassView);

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
   
  },
  
})


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
