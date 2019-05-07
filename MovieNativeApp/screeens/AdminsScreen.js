import React from 'react';
import {Text, View} from 'react-native';
import AdminCard from "../Components/AdminCard";
import store from "../store"

export default class AdminsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            admins: store.getState().currentAdmins
        };
    };


    render() {
        return (
            <View style={{flex: 1}}>
                {

                    this.state.admins.map((admin) => {
                        return <AdminCard
                            name={admin.name} email={admin.email}
                        />
                    })
                }
                <Text>Number of Admins:{this.state.admins.length}</Text>
            </View>
        );
    }
}