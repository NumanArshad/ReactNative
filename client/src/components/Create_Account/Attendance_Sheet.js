import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class AttendenceSheet extends Component{
constructor(props){
    super(props);
    this.state={username:'',password:''}
//this.signup=this.signup.bind(this);
this.handleChange1=this.handleChange1.bind(this);
this.handleChange2=this.handleChange2.bind(this);
this.Show=this.Show.bind(this);

}
signup(){
  Actions.signup();
}
handleChange1(event){
//this.setState({username:event.native.Text});
//alert(event.target.value);
  
}
handleChange2(event){
  //this.setState({password:event.native.Text});
  //alert(event.target.value);
    
  }
Show(){
 
  //Alert.alert("username is "+this.state.username);
//if(this.state.username=='NumanArshad'){
this.props.back();
//  Actions.AttSheet();
//}

}
	render(){
		return(
			<View style={styles.container}>
      <Image style={{width:120,height:120,marginBottom:10}} source={require('./logo.png')} />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter username"
              placeholderTextColor = "powderblue"
              selectionColor="blue"
            
           // id='username'
              onChangeText={(text)=>this.setState({username:text})}
            //  onChange={this.handleChange1}
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Password"
             // id='password'
           //   onChange={this.handleChange2}
           onChangeText={(text)=>this.setState({text:this.password})}
              secureTextEntry={true}
              placeholderTextColor = "powderblue"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button} >
             <Text style={styles.buttonText} onPress={this.Show}>Login</Text>
           </TouchableOpacity>    
<Text style={styles.buttonText}>Don't have account</Text>
<TouchableOpacity ><Text style={styles.buttonText}>SignUp</Text></TouchableOpacity >
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'blue'
  },

  inputBox: {
    width:300,
    backgroundColor:'white',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    //color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});