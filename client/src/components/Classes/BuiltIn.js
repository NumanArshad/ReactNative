// import React, { Component } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView,TextInput } from 'react-native';
// import {ListItem} from 'react-native-elements'
// import Modal from 'react-native-modal'
// import {ActionButton,Toolbar} from 'react-native-material-ui'

// const list = [  {
//     title: 'Appointments',
//     icon: 'av-timer'
//   },
//   {
//     title: 'Trips',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'Appointments',
//     icon: 'av-timer'
//   }, {
//     title: 'Appointments',
//     icon: 'av-timer'
//   }, 
//   {
//     title: 'Trips',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'Appointments',
//     icon: 'av-timer'
//   }, {
//     title: 'Appointments',
//     icon: 'av-timer'
//   },
//   ]
// export default class FAB extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isModalVisible:false,
//       data: [
//         { name: 'John', age: 18 },
//         { name: 'Lilli', age: 23 },
//         { name: 'Lavera', age: 46 },
//         { name: 'Paul', age: 32 },
//         { name: 'Jene', age: 14 },
//         { name: 'Felipe', age: 42 },
//         { name: 'Shawn', age: 26 },
//         { name: 'Carey', age: 24 },
//         { name: 'Mark', age: 33 }
//       ]
//     }
//   }
//   _toggleModal = () =>
//   this.setState({ isModalVisible: !this.state.isModalVisible });
//   render() {
//     const { data } = this.state;
//     return (
//       <View style={styles.container}>
//          {/* <View style={styles.heading}>
//            <Text style={styles.headingTest}>FAB with FlatList</Text>
//         </View> */}
//  <Toolbar style={{backgroundColor:"yellow"}} leftElement="menu" centerElement="Show Classes" 
//                    searchable={{autoFocus: true,placeholder: 'Search'}}/>
//         {/* <FlatList
//           data={data}
//           renderItem={({ item }) => <View style={styles.list}>
//             <Text>Name : {item.name}</Text>
//             <Text>Age : {item.age}</Text>
//           </View>}
//         /> */}
                

// <ScrollView>
//  <View  onLayout={(event)=>this.setState({listHeight:event.nativeEvent.layout.height})}>
//            {list.map((item, i) => (
//                <ListItem key={i} title={item.title}  leftIcon={{ name: item.icon }}  onPress={()=>alert(item.title)}
//                />
//             ))}
//            </View>
//           </ScrollView> 
//         <TouchableOpacity onPress={this._toggleModal} style={styles.fab}>
//           <Text style={styles.fabIcon}>+</Text>
//         </TouchableOpacity>




        
//         <View>
//         <Modal isVisible={this.state.isModalVisible} style={{backgroundColor:'white',//marginTop:topMargin,marginBottom:bottomMargin
//         maxHeight:200}}>
//           <View style={{flexGrow:1,justifyContent:'flex-start',alignItems:'center'}}>
//          <Toolbar centerElement="Add New Class" />

//           <TextInput style={styles.inputBox} 
//             underlineColorAndroid='blue'//'rgba(0,0,0,0)' 
//               placeholder="Enter class nme"
//               placeholderTextColor = "powderblue"
//               selectionColor="blue"/>
              
//             <TouchableOpacity style={styles.button} onPress={this._toggleModal}>
//               <Text style={styles.buttonText}>Hide me!</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>
//       </View>

//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
//  container: {
//     flex: 1,
//     marginTop: 20,
//    },
//   heading: {
//     height: 60,
//     backgroundColor: '#03A9F4',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headingTest: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   list: {
//     margin: 5,
//     backgroundColor: 'white',
//     height:40,
//     justifyContent: 'space-around',
//     paddingLeft: 10,
//     elevation: 1
//   },
//   fab: {
//     position: 'absolute',
//     width: 56,
//     height: 56,
//     alignItems: 'center',
//     justifyContent: 'center',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#03A9F4',
//     borderRadius: 30,
//     elevation: 8
//   },
//   fabIcon: {
//     fontSize: 40,
//     color: 'white'
//   },
//   inputBox: {
//     width:300,
//     //backgroundColor:'white',
//    // borderRadius: 25,
//     paddingHorizontal:16,
//     fontSize:16,
//     //color:'#ffffff',
//    // marginVertical: 10
//   },
//    button: {
//     width:300,
//     backgroundColor:'blue',
//    //  borderRadius: 25,
//       marginVertical: 10,
//       paddingVertical: 13
//   },
// });