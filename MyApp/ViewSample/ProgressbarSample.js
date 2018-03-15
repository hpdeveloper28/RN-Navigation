import React, { Component } from 'react';
import { View, ProgressBarAndroid } from 'react-native';

export default class ProgressbarSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { progress: 0 }

        setInterval(() => {
            this.setState({
                progress: this.state.progress + 0.1
            });
        }, 1000);
    }

    help() {
        // https://facebook.github.io/react-native/docs/progressbarandroid.html
    }

    render() {
        let { progress } = this.state
        return (
            <View>
                <ProgressBarAndroid
                    color='red'
                    indeterminate={false}
                    progress={this.state.progress}
                    styleAttr='Horizontal'>
                </ProgressBarAndroid>
            </View>
        )
    }
}