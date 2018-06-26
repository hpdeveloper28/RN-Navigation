import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class DrawableCanvasSample extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
    },
});
