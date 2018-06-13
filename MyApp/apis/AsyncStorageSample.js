import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import UserModel from '../models/UserModel'

export default class AsyncStorageSample extends React.Component {

    state = {
        userId: ''
    }

    async getUserId() {
        var userObject = await AsyncStorage.getItem('userId')
        var userModel = JSON.parse(userObject)
        this.setState({ userId: userModel.userId })
        alert(userModel.userId)
    }

    constructor(props) {
        super(props);
        this.getUserId = this.getUserId.bind(this)
        this.setUserId = this.setUserId.bind(this)
    }

    async setUserId() {
        var userModel = new UserModel(this.state.userId)
        var userObject = JSON.stringify(userModel)
        await AsyncStorage.setItem('userId', userObject)
        alert(userModel.userId)
    }

    render() {
        let { userId } = this.state
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputUserName}
                    placeholder='Please enter user id'
                    value={userId}
                    secureTextEntry={false}
                    onChangeText={(userId) => this.setState({ userId })}
                />
                <TouchableOpacity
                    style={styles.setButton}
                    onPress={this.setUserId}>
                    <Text>Set user ID</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.getButton}
                    onPress={this.getUserId}>
                    <Text>Get user ID</Text>
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