import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation
} from "react-native-popup-dialog";
import { Avatar, Card, IconButton, Appbar } from "react-native-paper";
import { AntDesign, Foundation, FontAwesome } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  state = {
    visible: false
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.Content
            style={{
              marginLeft: 30,
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
            title="Note"
          />
          <AntDesign name="setting" size={32} style={{ marginRight: 10 }} />
        </Appbar.Header>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "white"
          }}
        >
          <View style={styles.groupText} style={{ width: "100%", height: 50 }}>
            <Text style={styles.logoText}>Groups</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 130,

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              borderBottomWidth: 5,

              borderBottomColor: "#D3D3D3"
            }}
          >
            <Avatar.Image size={80} source={require("../images/avatar.jpg")} />
            <Avatar.Image size={80} style={styles.avatarstyle} />
            <Avatar.Image size={80} style={styles.avatarstyle} />
            <Avatar.Image size={80} style={styles.avatarstyle} />
          </View>
          <View style={{ width: "100%", height: 50 }}>
            <Text style={styles.logoText}>All Notes</Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 70,
              borderWidth: 3,
              borderColor: "#D3D3D3"
            }}
          >
            <Card.Title
              title="Welcome"
              subtitle="********"
              left={props => (
                <Foundation
                  {...props}
                  name="page"
                  size={32}
                  onPress={() => {}}
                  style={{ marginLeft: 10, color: "purple" }}
                />
              )}
              right={props => (
                <Text
                  style={{
                    fontWeight: "200",
                    textAlign: "center",
                    marginRight: 30
                  }}
                >
                  Just now
                </Text>
              )}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("pressed");
                this.setState({ visible: true });
              }}
            >
              <AntDesign
                name="pluscircle"
                size={64}
                color="#00FA9A"
                style={{ marginBottom: 10 }}
              />
            </TouchableOpacity>
            <Dialog
              dialogStyle={{ position: "absolute", bottom: 0 }}
              visible={this.state.visible}
              dialogAnimation={
                new SlideAnimation({
                  toValue: 0, // optional
                  slideFrom: "bottom", // optional
                  useNativeDriver: true // optional
                })
              }
              onTouchOutside={() => {
                this.setState({ visible: false });
              }}
            >
              <DialogContent>
                <View
                  style={{
                    width: "80%",
                    height: 200,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginLeft: 40,
                    marginRight: 40
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "flex-start",
                      position: "absolute",
                      fontSize: 20,
                      fontWeight: "500",

                      textAlign: "center",
                      marginBottom: 5,
                      marginTop: 10,
                      marginLeft: 10
                    }}
                  >
                    What would you like to do
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AddNote");
                      this.setState({ visible: false });
                    }}
                  >
                    <View
                      style={{
                        width: 120,
                        height: 90,
                        borderWidth: 5,
                        borderColor: "#D3D3D3",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#DCDCDC"
                      }}
                    >
                      <Foundation name="page" size={32} onPress={() => {}} />
                      <Text
                        style={{
                          marginBottom: 5,
                          fontSize: 20,
                          fontWeight: "400",
                          color: "purple"
                        }}
                      >
                        Add Note
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AddGroup");
                      this.setState({ visible: false });
                    }}
                  >
                    <View
                      style={{
                        width: 120,
                        height: 90,
                        borderWidth: 5,
                        borderColor: "#D3D3D3",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#DCDCDC"
                      }}
                    >
                      <FontAwesome name="group" size={32} onPress={() => {}} />
                      <Text
                        style={{
                          marginBottom: 5,
                          fontSize: 20,
                          fontWeight: "400",
                          color: "purple"
                        }}
                      >
                        Add Group
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      position: "absolute",
                      fontSize: 15,
                      fontWeight: "400",
                      color: "#DCDCDC",
                      textAlign: "center",
                      marginBottom: 5,
                      marginTop: 10,
                      marginLeft: 70
                    }}
                  >
                    Always encrypted
                  </Text>
                </View>
              </DialogContent>
            </Dialog>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  logoText: {
    fontSize: 30,
    fontWeight: "500",
    // marginTop: 40,
    // marginBottom: 30,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60
  },
  loginButton: {
    backgroundColor: "brown"
  },
  groupText: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 40,
    marginBottom: 30,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60,
    color: "white"
  },
  avatarstyle: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: "dashed",
    borderColor: "black"
  }
});
