import React, {Component} from 'react';
import {Button, Icon, SwipeRow, Text, View} from 'native-base';
import store from "../store";
import AdminEditModal from "./AdminEditModal";

export default class AdminCard extends Component {

    state = {
        isVisible: false
    };

    deleteAdmin = (adminId) => {
        store.dispatch({
            type: "DELETE_ADMIN",
            adminId
        })
    };

    setModalVisible() {
        this.setState({isVisible: !this.state.isVisible});
    }

    render() {
        return (
            <View>
                <SwipeRow
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    left={
                        <Button success onPress={() => this.setModalVisible()}>
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
                <AdminEditModal
                    isVisible={this.state.isVisible}
                    admin={this.props.admin}
                />
            </View>
        );
    }
}