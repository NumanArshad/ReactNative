import React, { Component } from 'react';

import {View,ScrollView,Button,CameraRoll,Image} from 'react-native'



export default class AccessCamera extends Component {
    constructor(props) {
      super(props);
      this.state={photos:[]}
    }

_handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',
        groupName:'GBWhatsApp Images'
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
         alert('can not load');
      });
    };
 render() {
  return (
    <View style={{marginTop:20}}>
      <Button title="Load Images" onPress={this._handleButtonPress} />
      <ScrollView>
        {this.state.photos.map((p, i) => {
        return (
          <Image
            key={i}
            style={{
              width: 300,
              height: 100,
              marginBottom:15
            }}
            source={{ uri: p.node.image.uri }}
          />
        
        );
      })}
      </ScrollView>
    </View>
  );
 }
}