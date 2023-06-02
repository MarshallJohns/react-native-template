//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//Packages
//Context
//Constants
//Navigation
import { createStackNavigator } from '@react-navigation/stack'
//Components
//Screens
import { Login } from '../Screens/Auth/Login'
import { SignUp } from '../Screens/Auth/SignUp'
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../../Styles/Index'

const Stack = createStackNavigator()

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    )
}