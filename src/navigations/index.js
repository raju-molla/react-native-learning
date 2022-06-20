import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const isLogged = false;
  return (
    <NavigationContainer>
      {
        isLogged? <DrawerNavigator />: <AuthNavigator />
      }
     
    </NavigationContainer>
  )
}

export default AppNavContainer