import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common/";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password) // to validate the info provided by the user.
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: "Authentication Failed"
    });
  }

  onLoginSuccess() {
    this.setState({
      loading: false,
      email: "",
      password: "",
      error: ""
    });
  }

  renderButtons() {
    if (this.state.loading) {
      return <Spinner size="small" color="#0000ff" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label="Email"
            placeholder="user@gmail.com"
            secureTextEntry={false}
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label="Password"
            placeholder="@123abcd!!"
            secureTextEntry={true}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButtons()}</CardSection>
      </Card>
    );
  }
}

// input text by default acts just like the image tag. It needs a bit of styling to be displayed.

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};
export default LoginForm;
