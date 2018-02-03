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

  render() {
    let {pontuacao} = this.state;
    return (
      <View>
        
        <Button
          onPress={ () => { this.salvarDados(); }}
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />

        <Button
          onPress={ () => { this.listarDados(); }}
          title="Listar dados"
          color="#841584"
          accessibilityLabel="Listar dados"
        />

        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);