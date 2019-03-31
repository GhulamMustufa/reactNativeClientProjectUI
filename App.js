import React from "react";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import AddGroup from "./components/AddGroup";
import AddNote from "./components/AddNote";
import { createStackNavigator, createAppContainer } from "react-navigation"; 

const RootStack = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null
      })
    },

    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    AddGroup: {
      screen: AddGroup,
      navigationOptions: () => ({
        header: null
      })
    },
    AddNote: {
      screen: AddNote,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "LoginScreen"
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
