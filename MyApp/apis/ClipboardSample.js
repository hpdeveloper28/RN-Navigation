import React, { Component } from 'react';
import {  View, Text, Clipboard, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

export default class ClipboardSample extends React.Component {

    state = {
        message: ''
    }

    async getMessage() {
        const message_ = await Clipboard.getString()
        this.setState({ message: message_ })
        alert(message_)
    }

    constructor(props) {
        super(props);
        this.getMessage = this.getMessage.bind(this)
        this.setMessage = this.setMessage.bind(this)
    }

    async setMessage() {
        await Clipboard.setString(this.state.message)
    }

    render() {
        let { message } = this.state
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputUserName}
                    placeholder='Please user id'
                    value={message}
                    secureTextEntry={false}
                    onChangeText={(message) => this.setState({ message })}
                />
                <TouchableOpacity
                    style={styles.setButton}
                    onPress={this.setMessage}>
                    <Text>Set message in Clipboard</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.getButton}
                    onPress={this.getMessage}>
                    <Text>Get message from Clipboard</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    textInputUserName: {
        textAlign: 'center',
        color: '#333333',
        padding: 20,
    }, setButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 20,
        padding: 10,
    }, getButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 20,
        padding: 10,
    }
})