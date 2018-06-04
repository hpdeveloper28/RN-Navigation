import React, { Component } from 'react';
import { View, Text, NetInfo } from 'react-native';

export default class NetInfoSample extends React.Component {

    constructor() {
        super()
        this.state = {
            isConnected: false
        }
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            this.setState({ isConnected });
        } else {
            this.setState({ isConnected });
        }
    };


    render() {

        return (
            <View>
                <Text>{this.state.isConnected}</Text>
            </View>
        )
    }
}