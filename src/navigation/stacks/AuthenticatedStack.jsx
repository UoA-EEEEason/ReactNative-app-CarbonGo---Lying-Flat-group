import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Account,
  Tests,
  Auth,
  OnboardingScreen,
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
        name="Demo"
        component={Tests.CommonDemo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Auth.LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={OnboardingScreen.WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Auth.RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogIn"
        component={Auth.LoginPageScreen}
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
