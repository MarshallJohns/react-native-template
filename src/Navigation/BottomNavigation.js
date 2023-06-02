//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
//Packages
//Context
//Constants
//Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//Components
//Screens
import { Home } from '../Screens/Home/Home'
//Icons
import Icon from 'react-native-vector-icons/FontAwesome5'
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../Styles/Index'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const HeaderImage = () => {
    return <Image style={styles.headerImg} source={LogoLight} />
}

export const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Test'
                options={{
                    headerShown: false
                    // headerStyle: {
                    // 	backgroundColor: Colors.headerBg,
                    // },
                    // headerTitle: props => <HeaderImage {...props} />,
                }}
                component={BottomNavigation}
            />
        </Stack.Navigator>
    )
}

export const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.activeTab,
                inactiveTintColor: Colors.inactiveTab,
                showLabel: false,
                style: {
                    backgroundColor: Colors.headerBg,
                    ...Misc.shadow,
                    height: Window.height * .1,
                },
            }}
        >
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    headerImg: { ...Images.headerImg },
})