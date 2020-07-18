import React from 'react';
import Router from "./Router";
import firebase from "firebase";

export default class App extends React.Component {

  componentWillMount(){
    const config={
      apiKey: "AIzaSyB83BKt90pwm5XzYUDhh_yieT-VLDbY7sw",
      authDomain: "medtronic-c0c32.firebaseapp.com",
      databaseURL: "https://medtronic-c0c32.firebaseio.com",
      projectId: "medtronic-c0c32",
      storageBucket: "medtronic-c0c32.appspot.com",
      messagingSenderId: "1024767746636"
    }
    firebase.initializeApp(config)
    console.disableYellowBox = true;
    console.reportErrorsAsExceptions = false;
  }
  render() {
    return (
      <Router></Router>
    );
  }
}
