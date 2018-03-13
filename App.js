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
import FlexSample from './MyApp/ViewSample/FlexSample'
import TextSample from './MyApp/ViewSample/TextSample'
import ImageViewSample from './MyApp/ViewSample/ImageViewSample'
import TextInputSample from './MyApp/ViewSample/TextInputSample'
import ScrollViewSample from './MyApp/ViewSample/ScrollViewSample'

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
    },
    FlexSample: {
      screen: FlexSample
    },
    TextSample: {
      screen: TextSample
    },
    ImageViewSample: {
      screen: ImageViewSample
    },
    TextInputSample: {
      screen: TextInputSample
    },
    ScrollViewSample: {
      screen: ScrollViewSample
    }
  },
  {
    initialRouteName: 'ScrollViewSample',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}