import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LOGIN, REGISTER } from '../constants/routeNames'

import Login from '../screens/Login'
import SignUp from '../screens/Register'


const AuthNavigator = () => {
    const HomeStack = createStackNavigator();
  return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={LOGIN} component={Login}></HomeStack.Screen>
            <HomeStack.Screen name={REGISTER} component={SignUp}></HomeStack.Screen>

        </HomeStack.Navigator>
  )
}

export default AuthNavigator