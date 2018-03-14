import React, { Component } from 'react';
import { View, Switch } from 'react-native';

export default class SwitchSample extends React.Component {

    state = { flag: false }

    anotherWay() {
        // onValueChange={(flag) => this.setState({ flag })}
        // value={this.state.flag}
    }

    render() {
        let { flag } = this.state
        return (
            <View>
                <Switch
                    onValueChange={(flag) => this.setState({ toggled: flag })}
                    value={this.state.toggled}
                />
            </View>
        )
    }
}