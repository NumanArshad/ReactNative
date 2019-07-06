import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

//import Login from './pages/Login';
//import Signup from './pages/Signup';
import CreateView from './components/Create_Account/Create_View'
import LoginView from './components/Login_Account/Login_View'
import ClassView from './components/Classes/Class_View'
import ManageView from './components/Manage_Student/ManageStudent_View'
import {createStackNavigator,StackNavigator} from 'react-navigation';

// const Routes = createStackNavigator({
// 	Home: {screen: LoginView},
// 	Profile: {screen: ClassView},
	
  
//   },
//   {initialRouteName:'Home'});
  //export default Routes;
export default class Routes extends Component {
	render() {
		
		return(
<Router>
			    <Stack key="root" hideNavBar={true} >
    <Scene key="login" component={LoginView} title="Login"  initial={true}/>
 					<Scene key="signup" component={CreateView} title="Register"  />
 				      <Scene key="classesComponent" component={ClassView} title="Classes"  />
 					<Scene key="manageStudent" component={ManageView} title="ManageStudent"  />

 			    </Stack>
		 </Router>  
 )
	}
}


// const AppStackNavigator = createStackNavigator({
// 	Home: {screen: LoginView},
// 	Profile: {screen: ClassView},
	
  
//   });

{/* <Router>
// 			    <Stack key="root" hideNavBar={true} >

				
// 				<Scene key="login" component={LoginView} title="Login"  initial={true}/>
// 					<Scene key="signup" component={CreateView} title="Register"  />
// 				      <Scene key="classesComponent" component={ClassView} title="Classes"  />
// 					<Scene key="manageStudent" component={ManageView} title="ManageStudent"  />

// 			    </Stack>
// 			 </Router>  */}