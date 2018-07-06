import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';

export default class ExpandCollapseViewSample extends React.Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('../Resources/Images/arrow_up.png'),
            'down': require('../Resources/Images/arrow_down.png')
        };

        this.state = {
            title: props.title,
            expanded: true,
            animation: new Animated.Value()
        };
    }

    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];
        }

        return (
            <Animated.View
                style={[styles.container, { height: this.state.animation }]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>This is sample Text
                    .This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.This is sample Text.</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});