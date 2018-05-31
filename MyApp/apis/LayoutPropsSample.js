import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LayoutPropsSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewOne} >
                    <Text style={styles.textOne}>
                        This is first text
                </Text>
                    <View style={styles.dividerView} />
                    <Text style={styles.textOne}>
                        This is second text
                </Text>
                </View>
                <View style={styles.viewTwo} />
                <View style={styles.viewThree} />
                <View style={styles.viewFour} />
            </View>
        )
    }
}
``
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    viewOne: {
        flex: .3,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textOne: {
        flex: 1,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: "center",
        textAlignVertical: "center",
        textAlignHorizontal: "center",
    }, dividerView: {
        flex: .05,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    viewTwo: {
        flex: .25,
        backgroundColor: '#32CAA5'
    },
    viewThree: {
        flex: .25,
        backgroundColor: '#5067DE'
    },
    viewFour: {
        flex: .3,
        backgroundColor: '#DE9950'
    }
})