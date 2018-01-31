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
    let funcionarios = firebase.database().ref("funcionarios");
    //database.ref("pontuacao").set("200");

    funcionarios.push().set(
      {
        nome: "Iarlem",
        altura: "1,76",
        peso: "120KG"
      }
    );

  }

  listarDados() {
    let pontuacao = firebase.database().ref("pontuacao");

    pontuacao.on('value');
  }

  render() {
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

        <Text>Meu App</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);