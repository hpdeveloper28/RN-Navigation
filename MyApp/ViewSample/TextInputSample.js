import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default class TextInputSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit() {
        console.log(this.state.username + "-" + this.state.password)
    }

    render() {
        let { username, password } = this.state
        return (
            <View>
                <TextInput
                    editable={true}
                    numberOfLines={2}
                    maxLength={100}
                    multiline={true}
                    style={styles.textInputUserName}
                    placeholder='Please enter username'
                    value={username}
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput
                    style={styles.textInputPassword}
                    placeholder='Please enter password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Text
                    onPress={this.onFormSubmit}>
                    Submit
                </Text>
                <Text
                    onPress={this.onFormSubmit()}>
                    Submit Instant
                </Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    textInputUserName: {
        textAlign: 'center',
        color: '#333333',
        padding: 20,
    }, textInputPassword: {
        textAlign: 'center',
        color: '#333333',
        padding: 20,
    },
});