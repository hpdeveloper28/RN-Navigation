import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class PhoneBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: 'H', data: ['H1', 'H2', 'H3'] },
            { title: 'S', data: ['S1', 'S2', 'S3'] },
            { title: 'Z', data: ['Z1', 'Z2', 'Z3', 'Z4'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title} </Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})