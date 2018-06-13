import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
} from 'react-native'

export default class ToolbarSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ToolbarAndroid
            style={styles.toolbar}
            title="Movies"
            // navIcon={require('../Resources/Images/icon_react_native.png')}
            titleColor= "000"
            actions = {[
              {title: "Log out", show: "never"}
            ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2196F3',
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
      }, 
  });