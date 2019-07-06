import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import AddStudent from './Add_Students'
import ShowStudent from './Show_Student'
import TakeAttendance from './Take_Attendance'
import AccessCamera from './Camera'
const AddStudentsRoute = () => <Text>Add Student</Text>;

const Attendance = () => <Text>Attendance</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNav extends React.Component {
  state = {
    index: 2,
    routes: [
      { key: 'music', title: 'Add Student', icon: 'queue-music',color:'red', },
      { key: 'albums', title: 'Attendance', icon: 'album',color:'blue' },
      { key: 'recents', title: 'Recents', icon: 'history',color:'green' },
      {key:'attendance',title:'Attendance',icon:'shopping-cart',color:'black'}

     
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: AddStudent,
    albums: TakeAttendance,//Attendance,
    recents:ShowStudent,//Attendance,
    attendance:AccessCamera//RecentsRoute
  });

  render() {
    return (
        
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}