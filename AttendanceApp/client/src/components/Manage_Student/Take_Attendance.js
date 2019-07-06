import React from "react"
import { StyleSheet,Dimensions,View,TouchableOpacity } from 'react-native';
 import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body,Title,Right, Item } from 'native-base';import { AppLoading } from "expo";

 const eventsList=[
    {
    data:'Hamza',
    status:'Present'
    },
  {
 data:'Usama',
 status:'Absent'
    }
  ]

  class ChildAttendance extends React.Component{
      constructor(props){
          super(props);
      }

      render(){
          return(
              <TouchableOpacity onPress={()=>alert('this.props.data')} activeOpacity={1}>
<Card  pointerEvents='none'  //key={this.props.index}   
 style={{elevation:3}}>
                
                <CardItem header>
              
                  <Text>{this.props.data}</Text>
                
                <Right style={{paddingLeft:this.props.setLeft}}>
                  <Text style={{color:this.props.statusColor}}>{this.props.status}</Text>
                  </Right>
                </CardItem>
              
              </Card>
              </TouchableOpacity>
          );
      }
  }

export default class TakeAttendance extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isReady: false,orientation:'',setLeft:((Dimensions.get('window').width/3)*2)-40
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    
    }

    showAttView(item,index){
        if(item.status=='Absent'){
            return  <ChildAttendance //index={index} 
            data={item.data} setLeft={this.state.setLeft} 
            statusColor='red' status={item.status}/>
}
else{
    return  <ChildAttendance //index={index} 
    data={item.data} setLeft={this.state.setLeft} 
    statusColor='black' status={item.status} />
}
    }
     isPortrait = () => {
        var dim = Dimensions.get('screen');
      //  alert('Portrait');
        return dim.height >= dim.width;
      };

    render(){
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: this.isPortrait() ? 'portrait' : 'landscape',setLeft:((Dimensions.get('window').width/3)*2)-40
            });
        
        });
       
var setPadding;
if(this.isPortrait()){
 //   setPadding=((Dimensions.get('window').width/3)*2)-40;
      
}
else{
   // setPadding=((Dimensions.get('window').width/3)*2)-40;

}
      
        return (
            <Container style={{marginTop:20}}>
           <Header>

          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
            <Content>
             

             <Card>
                <CardItem header>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      //Your text here
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>GeekyAnts</Text>
                </CardItem>
             </Card>
             <Container>
             {eventsList.map((item,index)=>{
  return  this.showAttView(item,index)
})}
</Container>
             
            </Content>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

