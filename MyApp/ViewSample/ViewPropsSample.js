import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class ViewPropsSample extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.childView1}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    childView1: {
        flex: 0.5,
        margin: 10,
        borderColor: 'green',
        backgroundColor: 'red',
        borderWidth: 10,
        borderRadius: 15,
        borderStyle: 'dashed',
        elevation: 50
    }
})