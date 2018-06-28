import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class GridViewSample extends React.Component {
    renderItem({ item, index }) {
        return <Text style={{
            flex: 1,
            margin: 20,
            backgroundColor: '#CCC',
            padding: 10,
            textAlign: 'center'
        }} >
            Hello
        </Text>
    }
    render() {
        return (<FlatList
            contentContainerStyle={styles.list}
            data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }]}
            renderItem={this.renderItem}
        />);
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
