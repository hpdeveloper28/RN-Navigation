import React, { Component } from 'react';
import { View, StyleSheet, WebView } from 'react-native';

export default class WebViewSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView source={{ uri: 'https://github.com/facebook/react-native' }}>
            </WebView>
        )
    }
}