import React from 'react';
import {View} from 'react-native';
import AdminCard from "../Components/AdminCard";

export default class AdminsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AdminCard/>
            </View>
        );
    }
}