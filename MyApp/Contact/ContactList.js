/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class ContactList extends Component {

    constructor(props) {
        super(props);
        this.navigateToDashboard = this.navigateToDashboard.bind(this);
    }

    navigateToDashboard = (userName) => {
        console.log(userName)
        this.props.navigation.navigate('ContactDetails', { user_name: userName })
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Android'},
            {key: 'iOS'},
            {key: 'React Native'},
            {key: 'Php'},
            {key: 'Java'},
            {key: 'Kotlin'},
            {key: 'Swift'},
            {key: '.Net'},
          ]}
          renderItem={({item}) => <Text style={styles.item}
          onPress={() => this.navigateToDashboard(item.key)}>{item.key}</Text>}
        />
      </View>
    );
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