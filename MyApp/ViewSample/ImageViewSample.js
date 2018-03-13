import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native'

export default class ImageViewSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View >
                <Image source={require('../Resources/Images/icon_react_native.png')} style={styles.localImageView}>
                </Image>

                <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={styles.liveImageView}>
                </Image>

                <Image source={{ uri: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={styles.localImageView}>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    localImageView: {
        width: 50,
        height: 50,
    },
    liveImageView: {
        width: 150,
        height: 150,
    },
    encodedImnageView: {
        width: 200,
        height: 200,
    }
})