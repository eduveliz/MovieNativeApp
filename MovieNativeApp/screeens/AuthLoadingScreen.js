import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View,} from 'react-native';
import User from "../User"

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        User.email = await AsyncStorage.getItem("userEmail");
        User.id = await AsyncStorage.getItem("userId");
        User.name = await AsyncStorage.getItem("userName");
        this.props.navigation.navigate(User.id ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}