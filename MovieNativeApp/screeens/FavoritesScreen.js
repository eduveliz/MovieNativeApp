import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {Body, Button, Card, CardItem, Icon, Left, Right, Text} from "native-base";
import {deleteDocument, fetchCollection} from "../firebase";
import User from "../User";

export default class FavoritesScreen extends React.Component {

    state = {
        favoriteMovies: []
    };

    componentDidMount() {
        this.fetchFavoriteMovies();
    }

    _keyExtractor = (item, index) => item.id;

    fetchFavoriteMovies = () => {
        fetchCollection("favorites", (movies) => {
            this.setState({favoriteMovies: movies})
        })
    };

    deleteFromFavorites = (favoriteId) => {
        return deleteDocument("favorites", favoriteId);
    };

    render() {
        const favorites = this.state.favoriteMovies.filter(movie => movie.idUser === User.id);
        return (
            <View>
                <FlatList
                    data={favorites}
                    keyExtractor={this._keyExtractor}
                    renderItem={(movie) =>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>{movie.item.movie.title}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image
                                    source={{uri: 'http://image.tmdb.org/t/p/w185/' + movie.item.movie.backdrop_path}}
                                    style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up"/>
                                        <Text>{movie.item.movie.popularity}</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button bordered danger
                                            onPress={() => this.deleteFromFavorites(movie.item.id)}>
                                        <Text>{"Discard"}</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>Average {movie.item.movie.vote_average}</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
        );
    }
}