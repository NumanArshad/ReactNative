/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';
//import {StackNavigator} from 'react-navigation';

import Routes from './src/Routes';
import { Provider } from "react-redux";
import store from "./src/store/index";
import CreateView from './src/components/Create_Account/Create_View';
//import Login from './Components/Login_Account/Login_SignIn'
/*const MainNavigator=StackNavigator({
  loginForm:{screen:Login}
})*/

export default class App extends Component {
  render() {
    return (
  <Provider store={store}>
      <View style={styles.container}>
        <StatusBar 
           backgroundColor="black"
           barStyle="light-content"
         />
        {/* <CreateView/> */}
     <Routes />
       
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
