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
    this.state = { technologyName: '' };
    this.navigateToDashboard = this.navigateToDashboard.bind(this);
    this.onTechnologyFilter = this.onTechnologyFilter.bind(this);
    filteredTechnologyList = technologyList;
  }

  navigateToDashboard = (technology) => {
    console.log(technology)
    this.props.navigation.navigate('ContactDetails', { user_name: technology })
  }

  onTechnologyFilter = (technologyName) => {
    this.setState({ technologyName })
    console.log(technologyName)

    filteredTechnologyList = technologyList.filter((item) => {
      return item.key.toLowerCase().match(technologyName.toLowerCase())
    })
  }

  render() {
    let { technologyName } = this.state
    return (
      <View style={styles.container}>

        <TextInput
          editable={true}
          numberOfLines={2}
          maxLength={100}
          multiline={true}
          style={styles.textInputUserName}
          placeholder='Please enter technology'
          value={technologyName}
          onChangeText={(technologyName) => this.onTechnologyFilter(technologyName)}
        />
        <FlatList
          data={filteredTechnologyList}
          renderItem={({ item }) => <Text style={styles.item}
            onPress={() => this.navigateToDashboard(item.key)}>{item.key}</Text>}
        />
      </View>
    );
  }
}

var filteredTechnologyList = []

var technologyList = [
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
