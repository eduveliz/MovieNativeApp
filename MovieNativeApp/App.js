import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoginScreen from "./screeens/LoginScreen";
import HomeScreen from "./screeens/HomeScreen";
import AuthLoadingScreen from "./screeens/AuthLoadingScreen";
import RegisterScreen from "./screeens/RegisterScreen";

const AppStack = createStackNavigator({Home: HomeScreen, Register: RegisterScreen});
const AuthStack = createStackNavigator({login: LoginScreen});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));