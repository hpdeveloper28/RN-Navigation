import React, { Component } from 'react';
import { View, Slider } from 'react-native';

export default class SliderSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                    thumbTintColor='red'>
                </Slider>
            </View>
        )
    }
}