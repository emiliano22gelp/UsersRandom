import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListUsersScreen from '../screens/ListUsers';
import { User } from '../interfaces/userApi.interfaces';
import { UserDetailScreen } from '../screens/UserDetail';

export type RootStackParamList = {
  Home: undefined;
  ListUsers: undefined;
  UserDetail: { user: User }
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
            backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ListUsers" component={ListUsersScreen} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} />
    </Stack.Navigator>
  );
}