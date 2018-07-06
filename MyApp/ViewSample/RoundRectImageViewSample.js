import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export default class RoundRectImageViewSample extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <View>
                <View style={styles.childView}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    childView: {
        width: 160,
        // Setting up image height.
        height: 160,
        // Set border width.
        borderWidth: 1,
        // Set border Hex Color code here.
        borderColor: '#F44336',
        // Set border Radius.
        borderRadius: 20,
        margin: 100
    }
})