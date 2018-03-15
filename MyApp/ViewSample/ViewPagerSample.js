import React, { Component } from 'react';
import { View, Text, ViewPagerAndroid } from 'react-native';

export default class ViewPagerSample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

var styles = {
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
}