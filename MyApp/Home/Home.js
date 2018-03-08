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

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.instructions}>
                        Welcome to Dashboard
        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }, button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});
