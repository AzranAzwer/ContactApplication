
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListScreen, AddContactScreen, ContactScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
      />
      <Stack.Screen
        name="AddContactScreen"
        component={AddContactScreen}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
      />
    </Stack.Navigator>
  );
};