import React from "react";
import {
  Button,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { Appbar } from "react-native-paper";

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onLogin(e) {
    e.preventDefault();

    console.log("login successful", this.state);
    this.props.navigation.navigate("HomeScreen");
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Appbar.Header>
          <Appbar.Content
            style={{
              marginLeft: 0,
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
            title="Note"
          />
        </Appbar.Header>
        <View style={styles.container}>
          <Text style={styles.logoText}>Clever message for login</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Access from anywhere"
              placeholderColor="#A8A8A8"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Don't reuse password"
              placeholderColor="#A8A8A8"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <TouchableHighlight
            underlayColor="#CD853F"
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.onLogin.bind(this)}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="white"
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Text style={{ color: "#A8A8A8" }}>
              Forgot your username or password
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="white"
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Text
              style={{ color: "#A8A8A8", fontWeight: "500", marginLeft: 100 }}
            >
              create an account
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ color: "#A8A8A8" }}>
            By tapping create an account you agree you agree to our{" "}
            <Text style={{ fontWeight: "bold", color: "lightblue" }}>
              Liscence Agreement
            </Text>{" "}
            and{" "}
            <Text style={{ fontWeight: "bold", color: "lightblue" }}>
              Privacy Statement
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    borderBottomWidth: 1,
    width: "90%",
    height: 60,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputText: {
    fontSize: 20,
    fontWeight: "200",
    marginLeft: 20
  },
  logoText: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 40,
    marginBottom: 30,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60
  },
  buttonContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "90%",
    borderRadius: 10
  },
  loginButton: {
    backgroundColor: "#00CCFF"
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500"
  }
});
