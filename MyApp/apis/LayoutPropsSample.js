import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LayoutPropsSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewOne} >
                    <Text style={styles.childTextCenter}>
                        1
                </Text>
                    <View style={styles.dividerViewHorizontal} />
                    <Text style={styles.childTextCenter}>
                        2
                </Text>
                </View>
                <View style={styles.viewTwo}>
                    <Text style={styles.childTextCenter}>
                        1
                </Text>
                    <View style={styles.dividerViewVertical} />
                    <Text style={styles.childTextCenter}>
                        2
                </Text>
                </View>
                <View style={styles.viewThree} >
                    <Text style={styles.childTextTop}>
                        1
                </Text>
                    <View style={styles.dividerViewHorizontal} />
                    <Text style={styles.childTextBottom}>
                        2
                </Text>
                </View>
                <View style={styles.viewFour} >
                    <Text style={styles.childTextLeft}>
                        1
                </Text>
                    <View style={styles.dividerViewHorizontal} />
                    <Text style={styles.childTextRight}>
                        2
                </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    viewOne: {
        flex: .4,
        backgroundColor: '#FF5733',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    viewTwo: {
        flex: .25,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#32CAA5'
    },
    viewThree: {
        flex: .25,
        backgroundColor: '#5067DE'
    },
    viewFour: {
        flex: .2,
        backgroundColor: '#DE9950'
    },
    childTextCenter: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: "center",
        textAlignVertical: "center",
        textAlignHorizontal: "center",
    },
    childTextTop: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: "center",
        textAlignVertical: "top"
    },
    childTextBottom: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: "center",
        textAlignVertical: "bottom"
    },
    childTextLeft: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: "left",
        textAlignVertical: "center"
    },
    childTextRight: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: "right",
        textAlignVertical: "center"
    },
    dividerViewHorizontal: {
        flex: 0.1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    dividerViewVertical: {
        flex: 0.05,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    }
})