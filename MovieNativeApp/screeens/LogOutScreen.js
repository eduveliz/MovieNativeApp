import React from 'react';
import {AsyncStorage, StyleSheet, Text, View} from "react-native"
import {Button} from 'native-base';

export default class LogOutScreen extends React.Component {

    static navigationOptions = {
        Title: "LogOut",
    };

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Esta seguro que desea salir?
                </Text>
                <Button block danger
                        onPress={this._logOut}
                >
                    <Text>Logout</Text>
                </Button>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});