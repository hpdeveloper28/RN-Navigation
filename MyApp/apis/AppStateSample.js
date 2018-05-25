import React, { Component } from 'react';
import { View, AppState, Text } from 'react-native';

export default class AppStateSample extends React.Component {

    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange)
    }

    componentWillMount() {
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange = (currentState) => {
        if (this.state.appState.match(/inactive|background/) && currentState == 'active') {
            console.log("App comes to foreground")
        } else {
            console.log("App goes to background")
        }
        this.setState({ appState: currentState })
    }

    render() {
        return (
            <View>
                <Text>Current state is: {this.state.appState}</Text>
            </View>
        )
    }
}