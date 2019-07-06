import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import ShowClasses from './Show_Class'
import {Icon} from 'react-native-material-ui';
import ShowMaterial from './Material'
import UpdatedList from './UpdatedList'
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music',color:'red' },
      { key: 'albums', title: 'Albums', icon: 'album',color:'blue' },
      { key: 'recents', title: 'Recents', icon: 'history',color:'green' },
      {key:'attendance',title:'Attendance',icon:'shopping-cart',color:'black'}

     
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: ShowMaterial,
    recents:UpdatedList,//ShowClasses,
    attendance:RecentsRoute
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