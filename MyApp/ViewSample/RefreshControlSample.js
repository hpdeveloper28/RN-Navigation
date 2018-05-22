import React, { Component } from 'react';
import { Text, StyleSheet, RefreshControl, FlatList } from 'react-native';


export default class RefreshControlSample extends React.Component {
    state = { refreshing: false }
    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this)
    }

    onRefresh() {
        console.log("onRefresh")
        this.setState({ refreshing: true });
        setTimeout(() => this.setState({ refreshing: false }), 3000);
    }

    render() {
        return (
            <FlatList
                data={[
                    { key: 'Android' },
                    { key: 'iOS' },
                    { key: 'React Native' },
                    { key: 'Php' },
                    { key: 'Java' },
                    { key: 'Kotlin' },
                    { key: 'Swift' },
                    { key: '.Net' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}
                    onPress={() => this.navigateToDashboard(item.key)}>{item.key}</Text>}
                refreshControl={<RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    refreshControl: {

    }
})