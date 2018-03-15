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
import ButtonSample from './MyApp/ViewSample/ButtonSample'
import PickerSample from './MyApp/ViewSample/PickerSample'
import SliderSample from './MyApp/ViewSample/SliderSample'
import SwitchSample from './MyApp/ViewSample/SwitchSample'
import BackPressEventSample from './MyApp/Events/BackPressEventSample'
import DrawerLayoutSample from './MyApp/ViewSample/DrawerLayoutSample'

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
    },
    ButtonSample: {
      screen: ButtonSample
    },
    PickerSample: {
      screen: PickerSample
    },
    SliderSample: {
      screen: SliderSample
    },
    SwitchSample: {
      screen: SwitchSample
    },
    BackPressEventSample: {
      screen: BackPressEventSample
    },
    DrawerLayoutSample: {
      screen: DrawerLayoutSample
    }
  },
  {
    initialRouteName: 'DrawerLayoutSample',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}