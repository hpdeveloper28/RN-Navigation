import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import UserModel from '../models/UserModel'

export default class AsyncStorageSample extends React.Component {

    state = {
        userId: '',
        password: ''
    }

    async getUserModel() {
        var userObject = await AsyncStorage.getItem('user')
        var userModel = JSON.parse(userObject)
        this.setState({ userId: userModel.userId, password: userModel.password })
        alert(userModel.userId + ' - ' + userModel.password)
    }

    constructor(props) {
        super(props);
        this.getUserModel = this.getUserModel.bind(this)
        this.setUserModel = this.setUserModel.bind(this)
    }

    async setUserModel() {
        var userModel = new UserModel(this.state.userId, this.state.password)
        var userObject = JSON.stringify(userModel)
        await AsyncStorage.setItem('user', userObject)
        alert(userModel.userId + ' - ' + userModel.password)
    }

    render() {
        let { userId, password } = this.state
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Please enter user id'
                    value={userId}
                    secureTextEntry={false}
                    onChangeText={(userId) => this.setState({ userId })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Please enter password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity
                    style={styles.setButton}
                    onPress={this.setUserModel}>
                    <Text>Set user</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.getButton}
                    onPress={this.getUserModel}>
                    <Text>Get user</Text>
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
    textInput: {
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