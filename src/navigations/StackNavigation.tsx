import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import {NAME_NAVIGATION} from '../constants/nameNavigator';
import TaskScreen from '../screens/tasks/TaskScreen';
import SearchScreen from '../screens/search/SearchScreen';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen component={HomeScreen} name={NAME_NAVIGATION.HOME} />
      <Stack.Screen component={TaskScreen} name={NAME_NAVIGATION.ADD_TASK} />
      <Stack.Screen component={SearchScreen} name={NAME_NAVIGATION.SEARCH} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
