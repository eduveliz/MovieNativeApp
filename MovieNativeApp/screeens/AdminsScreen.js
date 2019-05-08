import React from 'react';
import {Text, View} from 'react-native';
import AdminCard from "../Components/AdminCard";
import {fetchCollection} from "../firebase";

export default class AdminsScreen extends React.Component {
    state = {
        admins: []
    };

    componentDidMount() {
        this.fetchAdmins();
    }

    fetchAdmins = () => {
        fetchCollection("admins", (admins) => {
            this.setState({admins: admins})
        })
    };

    render() {
        return (
            <View style={{flex: 1}}>
                {

                    this.state.admins.map((admin) => {
                        return <AdminCard
                            admin={admin}
                        />
                    })
                }
                <Text>Number of Admins:{this.state.admins.length}</Text>
            </View>
        );
    }
}