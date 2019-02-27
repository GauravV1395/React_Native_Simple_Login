import React from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, CardSection, Spinner } from "./components/common/";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC_1I13dSxU1-bOk7PPMGhMdIjd-ceqUUo",
      authDomain: "authentication-f201e.firebaseapp.com",
      databaseURL: "https://authentication-f201e.firebaseio.com",
      projectId: "authentication-f201e",
      storageBucket: "authentication-f201e.appspot.com",
      messagingSenderId: "439047529807"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
