import React, { Component } from 'react';
import { View, Slider, Text } from 'react-native';

export default class SliderSample extends React.Component {

    state = { value: '' }

    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    onButtonPress() {
        console.log('Current progress: ' + this.state.value)
    }


    render() {
        let { value } = this.state
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
            }}>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor='green'
                    maximumTrackTintColor='blue'
                    thumbTintColor='red'
                    onValueChange={(value) => this.setState({ value })}>
                </Slider>
                <Text
                    onPress={this.onButtonPress}>
                    {this.state.value}
                </Text>
            </View>
        )
    }
}