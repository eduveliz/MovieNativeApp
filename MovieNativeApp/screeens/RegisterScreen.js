import React from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import {Button, Container, Content, Form, Input, Item, Label} from 'native-base';
import store from "../store";

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        Title: "Register new admin",
    };

    state = {
        email: "",
        password: "",
        name: ""
    };

    _logOut = async () => {
        alert("Account created");
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    addNewAdmin = (admin) => {
        store.dispatch({
            type: "ADD_NEW_ADMIN",
            admin
        }, this._logOut())
    };

    adminToData = () => {
        return {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
        }
    };

    changeValues = key => val => {
        this.setState({[key]: val})
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
                                onChangeText={this.changeValues("password")}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Full Name</Label>
                            <Input
                                value={this.state.name}
                                onChangeText={this.changeValues("name")}
                            />
                        </Item>

                        <View style={{padding: 10}}>
                            <Button full warning onPress={() => this.addNewAdmin(this.adminToData())}>
                                <Text>REGISTER</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}