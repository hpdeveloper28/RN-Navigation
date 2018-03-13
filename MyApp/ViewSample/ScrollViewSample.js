import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

export default class ScrollViewSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.parentScrollView}>

                <View style={styles.childViewBlue}>
                </View>

                <View style={styles.childViewGreen}>
                </View>

                <View style={styles.childViewRed}>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    parentScrollView: {
        
    },
    childViewGreen: {
        width: 200,
        height: 300,
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: 'green'
    },
    childViewBlue: {
        width: 200,
        height: 300,
        marginTop: 100,
        marginBottom: 50,
        backgroundColor: 'blue'
    },
    childViewRed: {
        width: 200,
        height: 300,
        marginBottom: 100,
        marginTop: 50,
        backgroundColor: 'red'
    },
})