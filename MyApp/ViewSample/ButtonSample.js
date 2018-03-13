import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class ButtonSample extends React.Component {

    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    onButtonPress() {
        console.log('Button pressed')
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.onButtonPress}
                    title="Press me!"
                    color="#841584">
                </Button>
            </View>
        )
    }
}