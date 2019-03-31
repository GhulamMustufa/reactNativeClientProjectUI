import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Share
} from "react-native";
import { Appbar } from "react-native-paper";
import { Avatar } from "react-native-paper";

export class AddGroup extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.Content
            style={{
              marginLeft: 0,
              fontSize: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
            subtitle="Cancel"
          />
          <Appbar.Content
            style={{
              marginLeft: 0,
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
            title="Group"
          />
          <Appbar.Content
            style={{
              marginLeft: 0,
              fontSize: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
            subtitle="save"
          />
        </Appbar.Header>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "white"
          }}
        >
          <View
            style={{
              width: "100%",
              height: 150,
              backgroundColor: "#9400D3",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Home</Text>
              <TextInput
                style={styles.inputs}
                keyboardType="email-address"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "white",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Avatar.Image
              size={100}
              style={{ marginBottom: 150 }}
              source={require("../images/avatar.jpg")}
            />

            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={this.onShare}
            >
              <Text style={{ color: "blue", fontSize: 25 }}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    borderBottomWidth: 1,
    width: "80%",
    height: 50,
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
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
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
    backgroundColor: "white"
  },
  inputText: {
    fontSize: 20,
    fontWeight: "200",
    marginLeft: 20,
    color: "#D3D3D3"
  }
});
export default AddGroup;
