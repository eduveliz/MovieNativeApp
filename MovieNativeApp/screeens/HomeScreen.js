import React from 'react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import MoviesScreen from "../screeens/MoviesScreen";
import FavoritesScreen from "../screeens/FavoritesScreen";
import SettingScreen from "../screeens/SettingScreen";
import LogOutScreen from "./LogOutScreen";
import AdminsScreen from "./AdminsScreen";


const HomeScreen = createBottomTabNavigator({
    Movies: MoviesScreen,
    Favorites: FavoritesScreen,
    Settings: SettingScreen,
    Admin: AdminsScreen,
    LogOut: LogOutScreen,
});

export default createAppContainer(HomeScreen);