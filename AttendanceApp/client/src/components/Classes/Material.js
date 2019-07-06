// import React, { Component } from 'react';
// import Actions from 'react-native-router-flux';
// // import LinearGradient from 'react-native-linear-gradient';

// import {
//   StyleSheet,
//   Text,
//   View,Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,KeyboardAvoidingView,
//   FlatList,TouchableHighlight
// } from 'react-native';
// // import Modal from "react-native-modal";
// import {Overlay} from 'react-native-elements'
// import {Icon,ActionButton,Toolbar} from 'react-native-material-ui'

// export default class ShowMaterial extends Component{
// constructor(props){
//     super(props);
//     this.state={username:'',password:'',activeTab:'',isVisible:true}


// }

// 	render(){
// 		return(
//             <View style={{marginTop:20}}>
//              <Toolbar
//              style={{backgroundColor:'yellow'}}
//         leftElement="menu"
//         centerElement="Searchable"
//         searchable={{
//           autoFocus: true,
//           placeholder: 'Search',
//         }}
//         rightElement={{
//             menu: {
//                 icon: "more-vert",
//                 labels: ["item 1", "item 2"]
//             }
//         }}
//         onRightElementPress={ (label) => { console.log(label) }}
//       />
// <View style={styles.container}>

//       <Icon name="add"/>
//       <ActionButton onPress={()=>this.setState({modalVisible:true})}/>

     

//     </View>

    
// {/* 
// <Overlay
//   isVisible={this.state.isVisible}
//   onBackdropPress={() => this.setState({isVisible: false})}
// >
//   <Text>Hello from Overlay!</Text>
// </Overlay>; */}
  
//     </View>
// 			)
// 	}
// }

// const styles = StyleSheet.create({
//   container: {
//    // flex: 1,
//     //paddingTop: 22,
//    // marginTop:40
//    backgroundColor:'green',
//    //bottom:20,
//    top:200,
//  //  position:'absolute'
//    },
//    item: {
//      padding: 10,
//      fontSize: 18,
//      height: 44,
//      marginTop:5,
//      marginBottom:5,
//      backgroundColor:'blue'
//    },
  
// });