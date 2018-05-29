import React, { Component } from 'react';
import { View, TextInput, Keyboard, StyleSheet } from 'react-native';

export default class KeyboardSample extends React.Component {

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        alert('Keyboard Shown');
    }

    _keyboardDidHide() {
        alert('Keyboard Hidden');
    }

    render() {
        return (
            <TextInput style = {styles.editTextStyle}
                onSubmitEditing={Keyboard.dismiss}
            />
        );
    }
}

const styles = StyleSheet.create({
    editTextStyle: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})