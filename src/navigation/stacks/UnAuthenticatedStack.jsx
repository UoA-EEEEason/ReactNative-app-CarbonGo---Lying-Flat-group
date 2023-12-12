import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tests, Auth, OnboardingScreen, Home, Account, News } from '../../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const UnAuthenticatedStack = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);

  useEffect(() => {
    const getBoarded = async () => {
      const launched = await AsyncStorage.getItem('isAppFirstLaunch');
      if (launched === null) {
        setIsAppFirstLaunch(true);
      } else {
        setIsAppFirstLaunch(false);
      }
    };
    getBoarded();
  }, []);

  if (isAppFirstLaunch === null) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={isAppFirstLaunch ? 'Loading' : 'Login'}>
      {isAppFirstLaunch && (
        <>
          <Stack.Screen
            name="Loading"
            component={OnboardingScreen.LoadingScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
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
        name="Reset"
        component={Auth.ResetScreen}
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
      <Stack.Screen
        name="Home"
        component={Home.HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account.AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="News"
        component={News.NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={News.NewsDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={News.MessageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;

const styles = StyleSheet.create({});
