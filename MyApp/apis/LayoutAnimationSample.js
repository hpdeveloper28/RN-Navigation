import React, { Component } from 'react';

import { StyleSheet, View, Animated, Image, Easing } from 'react-native';

export default class LayoutAnimationSample extends Component {

    constructor() {
        super()
        this.RotateValueHolder = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation()
    }

    startAnimation() {
        this.RotateValueHolder.setValue(0)
        Animated.timing(
            this.RotateValueHolder, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation())
    }

    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 250,
                        height: 250,
                        transform: [{ rotate: RotateData }]
                    }}
                    source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Butterfly.png' }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 250,
        height: 250,
    }
});