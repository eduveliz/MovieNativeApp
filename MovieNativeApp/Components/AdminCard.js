import React, {Component} from "react";
import {Body, Card, CardItem, Text} from "native-base";

export default class AdminCard extends Component {
    render() {
        return (
            <Card>
                <CardItem header button onPress={() => alert("Admin Edit")}>
                    <Text>{this.props.name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.email}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}