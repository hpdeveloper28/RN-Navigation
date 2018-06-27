import React, { Component } from 'react';
import {
    View, ListView, Text, StyleSheet
} from 'react-native';

export default class ListViewSample extends React.Component {

    constructor() {
        super()
        const rowDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: rowDataSource.cloneWithRows(['item 1', 'item 2', 'item 3']),
        };
    }

    renderRow = (rowData) => {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.rowText}>{rowData}</Text>
                <Text style={styles.rowText}>{rowData}</Text>
                <Text style={styles.rowText}>{rowData}</Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}>
                </ListView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    rowText: {
        flex: 1,
        textAlign: 'center'
    }
})