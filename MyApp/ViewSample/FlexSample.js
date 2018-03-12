import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexSample extends Component {
 render() {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{height: 100, backgroundColor: 'powderblue', flex: 0.25}} />
        <View style={{height: 100, backgroundColor: 'skyblue', flex: 0.5}} />
        <View style={{height: 100, backgroundColor: 'steelblue', flex: 0.25}} />
      </View>
    );
  }
}