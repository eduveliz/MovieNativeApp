import React, {Component} from 'react';
import {Modal, Text, View} from 'react-native';
import {Button, Form, Input, Item, Label} from "native-base";
import firebase from "@firebase/app";

export default class AdminEditModal extends Component {

    state = {
        email: this.props.admin.email,
        password: this.props.admin.password,
        name: this.props.admin.name,
        admin: this.props.admin,
        isVisible: this.props.isVisible
    };

    updateAdmin = () => {
        firebase.firestore()
            .collection("admins")
            .doc(this.state.admin.id)
            .set({
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
            });
    };

    changeValues = key => val => {
        this.setState({[key]: val})
    };

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.isVisible}>
                    <View style={{marginTop: 22}}>
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
                                <Button full warning onPress={() => this.updateAdmin()}>
                                    <Text>Update</Text>
                                </Button>
                            </View>
                        </Form>
                    </View>
                </Modal>
            </View>
        );
    }
}