import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList, Alert } from 'react-native';

export default class WebServiceSample extends React.Component {

    state = {
        isLoading: true
    }

    constructor(props) {
        super(props)
        this.navigateToDashboard = this.navigateToDashboard.bind(this)
    }

    componentDidMount() {
        // Fetch the data from server when screen loads
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => (response.json()))
            .then((responseJson) => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.movies
                    }, function () {
                        alert(responseJson.movies[3].title)
                    }
                )
            })
            .catch((error) => {
                console.error(error);
            });
    }

    navigateToDashboard = (userName) => {
        console.log(userName)
        this.props.navigation.navigate('ContactDetails', { user_name: userName })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size="large" color="#22A5E3" />
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text style={styles.item}
                        onPress={() => this.navigateToDashboard(item.title)}>{item.title}</Text>}
                />
            </View>
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