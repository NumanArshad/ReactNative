
// import React from "react"
// import { StyleSheet } from "react-native";
// import { Container, Header, Content, Footer, FooterTab,Icon, Button, Text,Body,Title,Left,Right } from 'native-base';
// import { AppLoading } from "expo";
// var BUTTONS = [
//   { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
//   { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
//   { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
//   { text: "Delete", icon: "trash", iconColor: "#fa213b" },
//   { text: "Cancel", icon: "close", iconColor: "#25de5b" }
// ];
// var DESTRUCTIVE_INDEX = 3;
// var CANCEL_INDEX = 4;
// export default class ShowStudent extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             isReady: false,
//         }
//     }

//     async componentWillMount() {
//         await Expo.Font.loadAsync({
//             Roboto: require("native-base/Fonts/Roboto.ttf"),
//             Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//             Ionicons: require("native-base/Fonts/Ionicons.ttf")
//         });
//         this.setState({ isReady: true });
//     }
//     componentWillUnmount () {
//       ActionSheet.actionsheetInstance = null;
//   }
//     render(){
//         if (!this.state.isReady) {
//             return <AppLoading />;
//         }

//         return (
//           <Container>
//           <Header>
//             <Left>
//               <Button transparent>
//                 <Icon name='menu' />
//               </Button>
//             </Left>
//             <Body>
//               <Title>Header</Title>
//             </Body>
//             <Right />
//           </Header>
//           <Content>
//             <Text>
//               This is Content Section
//             </Text>
//           </Content>
//           <Footer>
//             <FooterTab>
//               <Button full>
//                 <Text>Footer</Text>
//               </Button>
//             </FooterTab>
//           </Footer>
//         </Container>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })

import React, { Component } from 'react';
import { ListView,View } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text,Body,Title } from 'native-base';
import { Expo } from "expo";
import {Actions} from 'react-native-router-flux';
import {Toolbar} from 'react-native-material-ui'
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
export default class ShowStudent extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container style={{marginTop:20}}>
      
<View>
         <Toolbar  leftElement="menu" centerElement="Show Student" 
                   searchable={{autoFocus: true,placeholder: 'Search'}}/>
                   </View>
        <Content>
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
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
        </Content>
      </Container>
    );
  }
}