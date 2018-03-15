import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, DrawerLayoutAndroid } from 'react-native';

export default class DrawerLayoutSample extends React.Component {

    constructor(props) {
        super(props);
        this.navigationItemClickListener = this.navigationItemClickListener.bind(this)
    }

    navigationItemClickListener = (position) => {
        console.log(position)
    }


    // renderNavigationView() {
    //     return (
    //         <View style={{ flex: 1, backgroundColor: '#fff' }}>
    //             <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
    //         </View>
    //     )
    // }

    renderNavigationView() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Android', position: 0 },
                        { key: 'iOS', position: 1 },
                        { key: 'React Native', position: 2 },
                        { key: 'Php', position: 3 },
                        { key: 'Java', position: 4 },
                        { key: 'Kotlin', position: 5 },
                        { key: 'Swift', position: 6 },
                        { key: '.Net', position: 7 },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}
                        onPress={() => this.navigationItemClickListener(item.position)}>{item.key}</Text>}
                />
            </View>
        )
    }

    render() {
        return (
            <DrawerLayoutAndroid
                renderNavigationView={() => this.renderNavigationView()}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
