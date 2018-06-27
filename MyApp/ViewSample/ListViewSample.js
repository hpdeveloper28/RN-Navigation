import React, { Component } from 'react';
import {
    View, ListView, Text
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
            <Text>{rowData}</Text>
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