import React from 'react';
import {Image, Text, View} from 'react-native';
import {Body, Button, Card, CardItem, Icon, Left, Right, Thumbnail} from "native-base";

export default class MoviesCard extends React.Component {
    render() {
        return (
            <View>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'Image URL'}}/>
                            <Body>
                                <Text>a</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up"/>
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles"/>
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </View>
        );
    }
}