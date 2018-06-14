import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToolbarAndroid,
    StatusBar,
    Alert
} from 'react-native'

export default class ToolbarSample extends React.Component {

    constructor(props) {
        super(props);
        this.toolbarActionSelected = this.toolbarActionSelected.bind(this)
    }

    toolbarActionSelected(position) {
        alert('Clicked ' + position)
        // TODO put here switch case for option menu cliked by its position
    }

    render() {
        return (
            <View>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title='Movies'
                    titleColor='white'
                    backgroundColor='#f4511e'
                    actions={[
                        { title: 'Done', show: 'always', icon: require('../Resources/Images/ic_done.png') },
                        { title: 'Cancel', show: 'always', icon: require('../Resources/Images/ic_cancel.png') },
                    ]}
                    onActionSelected={this.toolbarActionSelected}
                />
                <Text>
                    Welcome to Toolbar demo
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2196F3',
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
});