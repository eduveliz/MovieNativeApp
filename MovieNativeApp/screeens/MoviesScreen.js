import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {getDataFromServer} from "../DataFromServer";
import {Body, Button, Card, CardItem, Icon, Left, Right, Text} from "native-base";
import {createDocument} from "../firebase";
import User from "../User";

export default class MoviesScreen extends React.Component {

    state = {
        moviesFromServer: [],
        favorites: [],
        isFavorite: false
    };

    componentDidMount() {
        this.refreshDataFromServer();
    }

    _keyExtractor = (item, index) => item.id;

    refreshDataFromServer = () => {
        getDataFromServer()
            .then((data) => this.setState({moviesFromServer: [data]}))
            .catch((e) => {
                console.log(e)
            })
    };

    addNewFavorite = (movie) => {
        return createDocument("favorites", {idUser: User.id, movie});
    };

    render() {
        const currentMovies = this.state.moviesFromServer.flatMap(movie => movie.results);
        return (
            <View>
                <FlatList
                    data={currentMovies}
                    keyExtractor={this._keyExtractor}
                    renderItem={(movie) =>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>{movie.item.title}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{uri: 'http://image.tmdb.org/t/p/w185/' + movie.item.backdrop_path}}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up"/>
                                        <Text>{movie.item.popularity}</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button bordered warning onPress={() => this.addNewFavorite(movie.item)}>
                                        <Text>{this.state.isFavorite ? "Discard" : "Favorite"}</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>Average {movie.item.vote_average}</Text>
                                </Right>
                            </CardItem>
                        </Card>}
                />
            </View>
        );
    }
}