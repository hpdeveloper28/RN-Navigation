import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';

export default class PickerSample extends React.Component {

    state = { user: '' }
    // Set default value on state
    // state = { user: 'Android' }

    constructor(props) {
        super(props);
    }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        let { user } = this.state
        return (
            <View>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                    <Picker.Item label="Android" value="Android" />
                    <Picker.Item label="iOS" value="iOS" />
                    <Picker.Item label="Windows" value="Windows" />
                </Picker>
                <Text>{this.state.user}</Text>
            </View>
        )
    }
}