import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Button, Container, Content, Form, Input, Item, Label, Text} from 'native-base';
import User from "../User";
import {fetchCollection} from "../firebase";


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        Title: "Login",
    };

    state = {
        email: "",
        password: "",
        users: []
    };

    componentWillMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetchCollection("admins", (data) => this.setState({users: data}))
    };

    changeValues = key => val => {
        this.setState({[key]: val})
    };

    submitForm = async () => {
        const validation = this.state.users.find((admin) => (admin.email === this.state.email && admin.password === this.state.password));
        if (validation) {
            await AsyncStorage.setItem("userId", validation.id);
            AsyncStorage.setItem("userEmail", this.state.email);
            AsyncStorage.setItem("userName", this.state.name);
            User.email = this.state.email;
            User.id = validation.id;
            this.props.navigation.navigate('App');
        } else {
            alert("bad email")
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
