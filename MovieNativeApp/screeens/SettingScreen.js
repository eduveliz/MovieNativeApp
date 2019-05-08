import React from 'react';
import {Text, View} from 'react-native';
import {Button, Container, Content, Form, Input, Item, Label} from 'native-base';
import {fetchCollection} from "../firebase";
import User from "../User";
import firebase from "@firebase/app";

export default class SettingScreen extends React.Component {

    state = {
        admin: [],
        email: "",
        name: "",
        password: "",
    };

    changeValues = key => val => {
        this.setState({[key]: val})
    };

    componentWillMount() {
        this.fetchAdmins();
    }

    fetchAdmins = () => {
        fetchCollection("admins", (admin) => {
            this.setState({admin: admin.find(currentAdmin => currentAdmin.id === User.id)}, () => {
                this.setState({
                    email: this.state.admin.email,
                    name: this.state.admin.name,
                    password: this.state.admin.password
                })
            })
        })
    };

    updateUser = () => {
        firebase.firestore()
            .collection("admins")
            .doc(this.state.admin.id)
            .set({
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
            });
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Label>Email</Label>
                            <Input
                                value={this.state.email}
                                onChangeText={this.changeValues("email")}
                            />
                        </Item>
                        <Item>
                            <Label>Password</Label>
                            <Input
                                value={this.state.password}
                                onChangeText={this.changeValues("password")}
                            />
                        </Item>
                        <Item>
                            <Label>Full Name</Label>
                            <Input
                                value={this.state.name}
                                onChangeText={this.changeValues("name")}
                            />
                        </Item>
                        <View style={{padding: 10}}>
                            <Button full warning onPress={() => this.updateUser()}>
                                <Text>Update info</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}