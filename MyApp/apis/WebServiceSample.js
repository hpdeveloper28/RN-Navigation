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
        this.getMoviesListByFetch()

        // Modify header and request params
        // this.getResponseByPost()

        // Async request for fetching movie list from server 
        // this.getMoviesListAsync()
    }

    getMoviesListByFetch() {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => (response.json()))
            .then((responseJson) => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.movies
                    }, function () {
                        alert(responseJson.movies[1].title)
                    }
                )
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getResponseByPost() {
        fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyANuBVu3Xv08S1uC0nKD42jO0UQQNaLXms', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                longDynamicLink: 'https://vn3aa.app.goo.gl/?link=https://actify.nl?challengeId%3D12345%26messageId%3D54321&apn=com.actify.actifymove.debug&ibi=com.actify.actifymove.debug',
            }),
        }).then((response) => (response.json()))
            .then((responseJson) => {
                this.setState(
                    {
                        isLoading: false
                    }, function () {
                        alert(responseJson.warning[0].warningCode)
                    }
                )
            })
            .catch((error) => {
                console.error(error)
            });
    }

    async getMoviesListAsync() {
        try {
            let response = await fetch(
                'https://facebook.github.io/react-native/movies.json'
            );
            let responseJson = await response.json();
            let moviesList = responseJson.movies;
            this.setState(
                {
                    isLoading: false,
                    dataSource: responseJson.movies
                }, function () {
                    alert(responseJson.movies[3].title)
                }
            )
        } catch (error) {
            console.error(error);
        }
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