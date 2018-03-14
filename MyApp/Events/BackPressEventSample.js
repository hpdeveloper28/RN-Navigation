import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, ToastAndroid } from 'react-native';

export default class BackPressEventSample extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', () => {
        //     console.log('onBackPress')
        // })
        
        BackHandler.addEventListener('hardwareBackPress', this.handlerBackButton)
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handlerBackButton)
    }

    handlerBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    Welcome to Back press listener page
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    welcomeText: {
        margin: 20,
        textColor: 'green',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})