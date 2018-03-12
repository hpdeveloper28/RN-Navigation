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
import Splash from './MyApp/Splash/Splash'
import Home from './MyApp/Home/Home'
import ContactList from './MyApp/Contact/ContactList'
import ContactDetails from './MyApp/Contact/ContactDetails'
import PhoneBook from './MyApp/SectionList/PhoneBook'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Splash: {
      screen: Splash,
    },
    ContactList: {
      screen: ContactList,
    },
    ContactDetails: {
      screen: ContactDetails,
    },
    PhoneBook: {
      screen: PhoneBook
    }
  },
  {
    initialRouteName: 'PhoneBook',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}