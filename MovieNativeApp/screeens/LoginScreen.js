import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Button, Container, Content, Form, Input, Item, Label, Text} from 'native-base';
import User from "../User";


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        Title: "Login",
    };

    state = {
        email: "",
        password: "",
    };

    changeValues = key => val => {
        this.setState({[key]: val})
    };

    submitForm = async () => {
        if (this.state.email.length < 8) {
            alert("bad email")
        } else if (this.state.password.length < 3) {
            alert("bad password")
        } else {
            await AsyncStorage.setItem("userEmail", this.state.email);
            User.email = this.state.email;
            this.props.navigation.navigate('App');
        }
    };

    registerForm = () => {
        this.props.navigation.navigate('Register');
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                value={this.state.email}
                                onChangeText={this.changeValues("email")}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                value={this.state.password}
                                secureTextEntry={true}
                                onChangeText={this.changeValues("password")}
                            />
                        </Item>
                        <View style={{padding: 10}}>
                            <Button onPress={this.submitForm} full info>
                                <Text>Login</Text>
                            </Button>
                        </View>
                        <View style={{padding: 5}}>
                            <Button onPress={this.registerForm} full warning>
                                <Text>Register</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}
