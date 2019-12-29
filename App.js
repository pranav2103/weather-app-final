import React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';

import { TextInput,Card,List } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './Component/SearchScreen';
import HomeScreen from './Component/HomeScreen';
import {Ionicons} from '@expo/vector-icons'
const TabNavigator = createBottomTabNavigator({
  "Current city": HomeScreen,
  "select city": SearchScreen,
}, 
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Current city') {
          iconName = `md-cloud`;
         
        } else if (routeName === 'select city') {
          iconName = `md-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor:"#6200ee",
      inactiveBackgroundColor:"#6200ee",
    },
  }
);

export default createAppContainer(TabNavigator);