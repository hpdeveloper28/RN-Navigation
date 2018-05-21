import React, { Component } from 'react';
import {View, DatePickerAndroid, StyleSheet } from 'react-native';

export default class DatePickerSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePickerAndroid
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})