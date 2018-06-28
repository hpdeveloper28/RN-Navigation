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
import ViewPagerSample from './MyApp/ViewSample/ViewPagerSample'
import ProgressbarSample from './MyApp/ViewSample/ProgressbarSample'
import RuntimePermissionSample from './MyApp/Permissions/RuntimePermissionSample'
import DatePickerSample from './MyApp/Picker/DatePickerSample'
import ToolbarAndroidSample from './MyApp/ViewSample/ToolbarSample'
import ActivityIndicatorSample from './MyApp/ViewSample/ActivityIndicatorSample'
import RefreshControlSample from './MyApp/ViewSample/RefreshControlSample'
import WebViewSample from './MyApp/ViewSample/WebViewSample'
import AppStateSample from './MyApp/apis/AppStateSample'
import AsyncStorageSample from './MyApp/apis/AsyncStorageSample'
import ClipboardSample from './MyApp/apis/ClipboardSample'
import KeyboardSample from './MyApp/apis/KeyboardSample'
import LayoutPropsSample from './MyApp/apis/LayoutPropsSample'
import LayoutAnimationSample from './MyApp/apis/LayoutAnimationSample'
import NetInfoSample from './MyApp/apis/NetInfoSample'
import ShareSample from './MyApp/apis/ShareSample'
import TimePickerSample from './MyApp/apis/TimePickerSample'
import WebServiceSample from './MyApp/apis/WebServiceSample'
import ViewPropsSample from './MyApp/ViewSample/ViewPropsSample'
import CanvasSample from './MyApp/Canvas/CanvasSample'
import DrawableCanvasSample from './MyApp/Canvas/DrawableCanvasSample'
import ListViewSample from './MyApp/ViewSample/ListViewSample';
import GridViewSample from './MyApp/ViewSample/GridViewSample'

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
    },
    ViewPagerSample: {
      screen: ViewPagerSample
    },
    ProgressbarSample: {
      screen: ProgressbarSample
    },
    RuntimePermissionSample: {
      screen: RuntimePermissionSample
    },
    DatePickerSample: {
      screen: DatePickerSample
    },
    ActivityIndicatorSample: {
      screen: ActivityIndicatorSample
    },
    RefreshControlSample: {
      screen: RefreshControlSample
    },
    WebViewSample: {
      screen: WebViewSample
    },
    AppStateSample: {
      screen: AppStateSample
    },
    AsyncStorageSample: {
      screen: AsyncStorageSample
    },
    ClipboardSample: {
      screen: ClipboardSample
    },
    KeyboardSample: {
      screen: KeyboardSample
    },
    LayoutPropsSample: {
      screen: LayoutPropsSample
    },
    LayoutAnimationSample: {
      screen: LayoutAnimationSample
    },
    NetInfoSample: {
      screen: NetInfoSample
    },
    ShareSample: {
      screen: ShareSample
    },
    TimePickerSample: {
      screen: TimePickerSample
    },
    WebServiceSample: {
      screen: WebServiceSample,
    },
    ToolbarAndroidSample: {
      screen: ToolbarAndroidSample,
      navigationOptions: {
        header: null
      }
    },
    ViewPropsSample: {
      screen: ViewPropsSample
    },
    CanvasSample: {
      screen: CanvasSample
    },
    DrawableCanvasSample: {
      screen: DrawableCanvasSample
    },
    ListViewSample: {
      screen: ListViewSample
    },
    GridViewSample: {
      screen: GridViewSample
    },
  },
  {
    initialRouteName: "GridViewSample",
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}