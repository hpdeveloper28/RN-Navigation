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

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}>
                </ListView>
            </View>
        )
    }
}