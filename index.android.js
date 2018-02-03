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

  cadastrarUsuario() {
  	let email = "iarlen@gmail.com";
  	let senha = "123456";

  	const usuario = firebase.auth();

  	usuario.createUserWithEmailAndPassword(
  		email, 
  		senha
  	).catch(
  		(erro) => {
  			alert(erro.message);
  		}
   	);
  }

  verificarUsuarioLogado() {
  	const usuario = firebase.auth();

  	usuario.onAuthStateChanged(
  		(usuarioAtual) => {
			if (usuarioAtual) {
				alert("Usuário está logado");
			} else {
			alert("Usuário não está logado");
			}
  		}
  	);

  // 	const usuarioAtual = usuario.currentUser;

  // 	if (usuarioAtual) {
  // 		alert("Usuário está logado");
  // 	} else {
		// alert("Usuário não está logado");
  // 	}
  }

	deslogarUsuario() {
		const usuario = firebase.auth();

		usuario.signOut();
	}

  render() {
    
    return (
      <View>
        
        <Button
          onPress={ () => { this.cadastrarUsuario(); }}
          title="Cadastrar Usuario"
          color="#841584"
          accessibilityLabel="Cadastrar Usuario"
        />

		<Button
          onPress={ () => { this.verificarUsuarioLogado(); }}
          title="Verificar Usuario logado"
          color="#841584"
          accessibilityLabel="Verificar Usuario logado"
        />

        <Button
          onPress={ () => { this.deslogarUsuario(); }}
          title="deslogar Usuario"
          color="#841584"
          accessibilityLabel="deslogar Usuario"
        />

        <Button
          onPress={ () => { this.logarUsuario(); }}
          title="Logar Usuario"
          color="#841584"
          accessibilityLabel="logar Usuario"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);