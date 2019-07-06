// import React, { Component } from 'react';
// import Actions from 'react-native-router-flux';
// import {Icon} from 'react-native'


// import {
//   StyleSheet,
//   Text,
//   View,Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,KeyboardAvoidingView,
//   FlatList,Dimensions,ScrollView
// } from 'react-native';
// import {ListItem} from 'react-native-elements'
// import {Overlay} from 'react-native-elements'
// import Modal from 'react-native-modal'
// import {ActionButton,Toolbar} from 'react-native-material-ui'
// //import ActionButton from 'react-native-action-button'
// // var Display = require('react-native-device-display');

// const list = [  {
//   title: 'Appointments',
//   icon: 'av-timer'
// },
// {
//   title: 'Trips',
//   icon: 'flight-takeoff'
// },
// {
//   title: 'Appointments',
//   icon: 'av-timer'
// }, {
//   title: 'Appointments',
//   icon: 'av-timer'
// }, 
// {
//   title: 'Trips',
//   icon: 'flight-takeoff'
// },
// {
//   title: 'Appointments',
//   icon: 'av-timer'
// }, {
//   title: 'Appointments',
//   icon: 'av-timer'
// },
// {
//   title: 'Appointments',
//   icon: 'av-timer'
// }, {
//   title: 'Appointments',
//   icon: 'av-timer'
// }, 
// {
//   title: 'Trips',
//   icon: 'flight-takeoff'
// },
// {
//   title: 'Appointments',
//   icon: 'av-timer'
// }, {
//   title: 'Appointments',
//   icon: 'av-timer'
// },
// ]
// export default class Show extends Component{
// constructor(props){
//     super(props);
//     this.state={currentHeight:'',currentWidth:'',listHeight:'',orientationStatus:'',isModalVisible: false}
// }
// componentDidMount(){
//  this.handleIcon();
// }
// handleIcon(){
//   if(this.state.currentHeight<this.state.currentWidth){
// this.setState({orientationStatus:'Landscape'})
//   }
//   else{
//   this.setState({orientationStatus:'Portrait'})
//   }
// }

// _toggleModal = () =>
// this.setState({ isModalVisible: !this.state.isModalVisible });

// render(){
//   var currentheight=Dimensions.get('window').height;
//   var currentwidth=Dimensions.get('window').width;
//   var topMargin,bottomMargin;
// if(currentheight>currentwidth){
//   topMargin='40%',bottomMargin='40%';
// }
//   return(
//     <View style={styles.container} onLayout={(event)=>this.setState({currentHeight:event.nativeEvent.layout.height,
//     currentWidth:event.nativeEvent.layout.width},()=>this.handleIcon())} >
//          <Toolbar backgroundColor="red" leftElement="menu" centerElement="Show Classes" />

//          <ScrollView>
//          <View  onLayout={(event)=>this.setState({listHeight:event.nativeEvent.layout.height})}>
//            {list.map((item, i) => (
//                <ListItem key={i} title={item.title}  leftIcon={{ name: item.icon }} // onPress={()=>alert(item.title)}
//                />
//            ))}
//           </View>
//           </ScrollView>
//           <View style={{marginTop:Dimensions.get('window').height-this.state.listHeight-90}}
//           >
         
//            <ActionButton style={{marginLeft:30}} onPress={this._toggleModal}/>
//           </View> 

//           <View //style={{ flex: 1 
//         //  }}
//           onLayout={()=>alert("height is"+topMargin)}>
//         <TouchableOpacity onPress={this._toggleModal}>
//           <Text>Show Modal</Text>
//         </TouchableOpacity>
//         <Modal isVisible={this.state.isModalVisible} style={{backgroundColor:'white',//marginTop:topMargin,marginBottom:bottomMargin
//         maxHeight:200}}
//         //deviceHeight={Dimensions.get('window').height}
//         >
//           <View style={{flexGrow:1,justifyContent:'flex-start',alignItems:'center'}}
//           >
//                    <Toolbar centerElement="Add New Class" />

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

//   		</View>
//     )
// 	}
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//    },
//    inputBox: {
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

  
  
// });


// import React, { Component } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView,TextInput ,Dimensions} from 'react-native';
// import {ListItem} from 'react-native-elements'
// import Modal from 'react-native-modal'
// import {ActionButton,Toolbar} from 'react-native-material-ui'
// import {Actions} from 'react-native-router-flux';

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
//    alert((Dimensions.get('window').height+10)/3);
//     var height=Dimensions.get('window').height+10;
//     return (
//       <View style={styles.container} //onLayout={()=>alert(Dimensions.get('window').height)}
//       >
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
//  <View>
//  {
//     list.map((item, i) => (
//       <ListItem
//         key={i}
//         title={item.title}
//         leftIcon={{ name: item.icon }} onPress={()=>Actions.manageStudent()}
//       />
//     ))
//   }
//            </View>
//           </ScrollView> 
//         <TouchableOpacity onPress={this._toggleModal} style={styles.fab}>
//           <Text style={styles.fabIcon}>+</Text>
//         </TouchableOpacity>




        
//         <View>
//         <Modal isVisible={this.state.isModalVisible} style={{//backgroundColor:'white',//marginTop:topMargin,marginBottom:bottomMargin
//        maxHeight:height/3//:200
//         }}>
//           <View style={{flexGrow:1,justifyContent:'space-between',alignItems:'center',backgroundColor:'white'
//         }}>
//          <Toolbar centerElement="Add New Class" />

//           <TextInput style={styles.inputBox} 
//             underlineColorAndroid='red' 
//               placeholder="Enter class nme"
//               placeholderTextColor = "powderblue"
//               selectionColor="blue"
//               />
              
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



// import React, { Component } from 'react';
// import { Container, Header, View, Button, Icon, Fab } from 'native-base';
// export default class ShowClasses extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: 'true'
//     };
//   }
//   render() {
//     return (  
//       <Container>
//         <Header />
//         <View style={{ flex: 1 }}>
//           <Fab style={{ backgroundColor: '#5067FF' }}  position="bottomRight" >
//             <Icon name="share" />
//            </Fab>
//         </View>
//       </Container>
//     );
//   }
// }


import React, { Component } from 'react';
import { ListView,View,TouchableOpacity,StyleSheet//,TextInput
 } from 'react-native';
 import {TextInput} from 'react-native-paper'
import { Container, Header, Title, Button, Icon, List, ListItem, Text, Fab,Left,Right,Body} from 'native-base';
import {AppLoading } from "expo";
import {Actions} from 'react-native-router-flux';
import {Toolbar} from 'react-native-material-ui';
import Modal from 'react-native-modalbox';
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];
export default class ShowClasses extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {   isReady: false,
      basic: true,isOpen:false,
      listViewData: datas
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
}

  //   _toggleModal = () =>
  // this.setState({ isOpen: !this.state.isOpen });
  
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    if (!this.state.isReady) {
      return <AppLoading />;
  }
 // alert(this.state.isOpen);
    return (
<Container style={{marginTop:20}}>
<View style={{flex:1}}>
<Header>
          {/* <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left> */}
          <Left />
          <Body>
            <Title>Show Classes</Title>
          </Body>
          <Right />
        </Header>
      {/* <Content >  */}
     
     <List
     leftOpenValue={75}
     rightOpenValue={-75}
     dataSource={this.ds.cloneWithRows(this.state.listViewData)}
     renderRow={data =>
       <ListItem onPress={()=>Actions.manageStudent()}>
         <Text> {data} </Text>
       </ListItem>}
     renderLeftHiddenRow={data =>
       <Button full onPress={() => alert(data)}>
         <Icon active name="information-circle" />
       </Button>}
     renderRightHiddenRow={(data, secId, rowId, rowMap) =>
       <Button full danger onPress={ () => this.deleteRow(secId, rowId, rowMap)}>
         <Icon active name="trash" />
       </Button>}
   /> 
         
       <Modal backdrop={true} keyboardTopOffset={20} isOpen={this.state.isOpen} style={styles.modal} 
       position={"center"} >
          <View style={{flexGrow:1,justifyContent:'flex-start'}}>
         {/* <Toolbar centerElement="Add New Class" /> */}
         <Header>
           <Left /><Body><Title>Add Class</Title></Body><Right />
         </Header>
          <TextInput  style={{backgroundColor:'white'}} underlineColorAndroid='red' 
              placeholder="Enter class name" placeholderTextColor = "powderblue" selectionColor="blue" />
               <Button block style={{margin:10}}><Text>Add Class</Text></Button>
       
         </View>
        
        </Modal>

        <Fab style={{ backgroundColor: '#5067FF' }}  position="bottomRight" onPress={()=>this.setState({isOpen:true})}>
             <Icon name="add" />
            </Fab>
      </View>
    </Container>
);
  }
}

const styles = StyleSheet.create({
 modal: {
 
    height: 185,
    width: '78%'
  },
})



