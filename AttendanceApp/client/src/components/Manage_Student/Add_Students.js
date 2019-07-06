import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {View,Text,StyleSheet,ScrollView,Dimensions} from 'react-native'

import { TextInput,Button } from 'react-native-paper';
import {Toolbar} from 'react-native-material-ui'

export default class AddStudent extends Component {
    constructor(props) {
      super(props);
      this.state={listHeight:510}
    }
    detectOrientation(){
        if(Dimensions.get('window').height>Dimensions.get('window').width){
            this.setState({listHeight:510});
            }
            else if(Dimensions.get('window').height<Dimensions.get('window').width){
              this.setState({listHeight:230});
        
            }
    }

render() {
    return (
        <View style={styles.container} onLayout={()=>this.detectOrientation()}>
 <Toolbar  centerElement="Add Student" />
 <View style={{maxHeight:this.state.listHeight}}>
 <ScrollView>
 <View style={styles.innerContainer}>
 
<TextInput style={styles.formArea}
  //style={{marginTop:30}}
  textContentType='name'
       placeholder="Enter Student name" 
       label="Student name"
       underlineColor='red'
       underlineColorAndroid='transparent'/>
       <TextInput 
         textContentType='name'
 style={styles.formArea}
       placeholder="Enter Father name" 
       label="Father name"
       underlineColor='red'
       underlineColorAndroid='transparent'/>

<TextInput   textContentType='telephoneNumber'
  style={styles.formArea}
       placeholder="Enter Contact Number" 
       label="Contact Number"
       underlineColor='red'
       underlineColorAndroid='transparent'/>
       <TextInput   textContentType='emailAddress'
  style={styles.formArea}
       placeholder="Enter email" 
       label="Email"
       underlineColor='red'
       underlineColorAndroid='transparent'/>
        <Button style={{backgroundColor:'blue',marginTop:10}} mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
</View>
</ScrollView>
</View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  
   container: {
      flexGrow: 1,
      marginTop: 20,
     backgroundColor:'white'
     },
     innerContainer:{
     margin:10

     },
     formArea:{
        backgroundColor:'white',
         marginBottom:2,
        
     }
    }
)

// import React, { Component } from 'react';
// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
// export default class AddStudent extends Component {
//   render() {
//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon name="ios-search" />
//             <Input placeholder="Search" />
//             <Icon name="ios-people" />
//           </Item>
//           <Button transparent>
//             <Text>Search</Text>
//           </Button>
//         </Header>
//       </Container>
//     );
//   }
// }




