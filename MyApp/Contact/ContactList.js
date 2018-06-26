/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TextInput } from 'react-native';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = { userName: '' };
    this.navigateToDashboard = this.navigateToDashboard.bind(this);
    this.onUserFilter = this.onUserFilter.bind(this);
    filteredUserList = userList;
  }

  navigateToDashboard = (userName) => {
    console.log(userName)
    this.props.navigation.navigate('ContactDetails', { user_name: userName })
  }

  onUserFilter = (userName) => {
    this.setState({ userName })
    console.log(userName)

    filteredUserList = userList.filter((item) => {
      return item.key.toLowerCase().match(userName.toLowerCase())
    })
  }

  render() {
    let { userName } = this.state
    return (
      <View style={styles.container}>

        <TextInput
          editable={true}
          numberOfLines={2}
          maxLength={100}
          multiline={true}
          style={styles.textInputUserName}
          placeholder='Please enter User name'
          value={userName}
          onChangeText={(userName) => this.onUserFilter(userName)}
        />
        <FlatList
          data={filteredUserList}
          renderItem={({ item }) => <Text style={styles.item}
            onPress={() => this.navigateToDashboard(item.key)}>{item.key}</Text>}
        />
      </View>
    );
  }
}

var filteredUserList = []

var userList = [
  { key: 'Android' },
  { key: 'iOS' },
  { key: 'React Native' },
  { key: 'Php' },
  { key: 'Java' },
  { key: 'Kotlin' },
  { key: 'Swift' },
  { key: '.Net' },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }, textInputPassword: {
    textAlign: 'center',
    color: '#333333',
    padding: 20,
  },
})
