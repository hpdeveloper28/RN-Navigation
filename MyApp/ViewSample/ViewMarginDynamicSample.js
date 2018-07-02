import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';

export default class ViewMarginDynamicSample extends React.Component {

    constructor() {
        super()
        this.state = { childViewMargin: 10 }
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({ childViewMargin: 100 })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.child, { margin: this.state.childViewMargin }]}>
                </View>
                <Button title="Click here to set margin" onPress={this.onButtonClick}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    child: {
        flex: 0.3,
        backgroundColor: 'white'
    }
})