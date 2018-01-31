import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

import firebase from 'firebase';

export default class App extends Component {

  componentWillMount() {

    var config = {
      apiKey: "AIzaSyBhc5EqO1Rnp3IepnnF9JKN-ErmzDE9bbw",
      authDomain: "fir-teste-ac98e.firebaseapp.com",
      databaseURL: "https://fir-teste-ac98e.firebaseio.com",
      projectId: "fir-teste-ac98e",
      storageBucket: "fir-teste-ac98e.appspot.com",
      messagingSenderId: "887666779936"
    };

    firebase.initializeApp(config);
  }

  salvarDados() {
    let database = firebase.database();
    database.ref("pontuacao").set("200");

  }

  render() {
    return (
      <View>
        <Text>Meu App</Text>
        <Button
          onPress={ () => { this.salvarDados(); }}
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);