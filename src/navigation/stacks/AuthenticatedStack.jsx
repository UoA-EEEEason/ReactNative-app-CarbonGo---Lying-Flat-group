import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Account,
  Tests,
  Auth,
} from '../../screens';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Account"
        component={Account.AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Auth.LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={Auth.SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tests"
        component={Tests.TestsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({});
