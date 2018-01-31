import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View>
        <Text>Meu App</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);