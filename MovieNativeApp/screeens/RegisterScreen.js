import React from 'react';
import {Text, View} from 'react-native';
import {Button, Container, Content, Form, Input, Item, Label} from 'native-base';

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        Title: "Register new admin",
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Full Name</Label>
                            <Input/>
                        </Item>

                        <View style={{padding: 10}}>
                            <Button full warning>
                                <Text>REGISTER</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}