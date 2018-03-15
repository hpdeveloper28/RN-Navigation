import React, { Component } from 'react';
import { View, ProgressBarAndroid } from 'react-native';

export default class ProgressbarSample extends React.Component {

    constructor(props) {
        super(props);
    }

    help() {
        // https://facebook.github.io/react-native/docs/progressbarandroid.html
    }

    render() {
        return (
            <View>
                <ProgressBarAndroid
                    color='red'
                    indeterminate={true}
                    styleAttr='Horizontal'>
                </ProgressBarAndroid>
            </View>
        )
    }
}