import React, {Component} from 'react';
import {Button, Icon, SwipeRow, Text, View} from 'native-base';
import store from "../store";

export default class AdminCard extends Component {


    deleteAdmin = (adminId) => {
        store.dispatch({
            type: "DELETE_ADMIN",
            adminId
        })
    };

    render() {
        return (
            <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                    <Button success onPress={() => alert('Add')}>
                        <Icon active name="cog"/>
                    </Button>
                }
                body={
                    <View>
                        <Text>{this.props.admin.name}</Text>
                    </View>
                }
                right={
                    <Button danger onPress={() => this.deleteAdmin(this.props.admin.id)}>
                        <Icon active name="trash"/>
                    </Button>
                }
            />
        );
    }
}