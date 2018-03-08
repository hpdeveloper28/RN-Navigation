/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Home from './MyApp/Home/Home'
import Splash from './MyApp/Splash/Splash'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Splash: {
      screen: Splash,
    },
  },
  {
    initialRouteName: 'Splash',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}