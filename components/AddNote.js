import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Appbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export class AddNote extends Component {
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
            title="Note"
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
              height: 200,
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Document Name</Text>
              <TextInput
                style={styles.inputs}
                keyboardType="email-address"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Your Notes</Text>
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
              backgroundColor: "#D3D3D3",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Appbar style={styles.bottom}>
              <FontAwesome name="text-height" size={20} />
              <FontAwesome name="bold" size={20} />
              <FontAwesome name="italic" size={20} />
              <FontAwesome name="underline" size={20} />
              <MaterialIcons name="text-format" size={20} />
              <FontAwesome name="list-ul" size={20} />
              <FontAwesome name="list-ol" size={20} />
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{ marginLeft: 100 }}
              >
                <FontAwesome name="send" color="lightgreen" size={20} />
              </TouchableOpacity>
            </Appbar>
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
    width: "90%",
    height: 60,
    marginBottom: 5,
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
    bottom: 0,
    color: "#D3D3D3",
    justifyContent: "space-between"
  },
  inputText: {
    fontSize: 20,
    fontWeight: "200",
    marginLeft: 20,
    color: "black"
  }
});
export default AddNote;
