import React, {Component} from "react";
import {Body, Card, CardItem, Container, Content, Text} from "native-base";

export default class AdminCard extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header button onPress={() => alert("Admin Edit")}>
                            <Text>Admin Name</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Email
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}