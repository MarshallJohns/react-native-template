//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//Packages
//.env
//Context
//Constants
//Navigation
import { NavigationContainer } from '@react-navigation/native'
//Components
//Screens
import { AuthStack } from './AuthStack'
import { MainStack } from './BottomNavigation'
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../Styles/Index'

export const Routes = () => {
    const user = false

    return (
        <View style={styles.routesView}>
            <NavigationContainer>
                {!user ? <AuthStack /> : <MainStack />}
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    routesView: {
        ...Containers.routesView,
    },
})