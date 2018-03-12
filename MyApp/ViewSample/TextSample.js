import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TextSample extends React.Component {
    constructor(props) {
        super(process);
        this.state = {
            titleText: "Hey developer",
            descriptionText: "Let's start React Native developement"
        };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 40 }} >
                    {this.state.titleText}
                </Text>
                <Text style={{ marginTop: 100, fontSize: 20, fontFamily: 'Cochin', fontStyle: 'italic', fontWeight: 'bold' }} >
                    {this.state.descriptionText}
                </Text>
            </View>
        )
    }
}