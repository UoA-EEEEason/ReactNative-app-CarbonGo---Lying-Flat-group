import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, OnboardingScreen,Home } from '../../screens';
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
    <Stack.Navigator initialRouteName={isAppFirstLaunch ? 'Welcome' : 'Login'}>
      {isAppFirstLaunch && (
        <>
          <Stack.Screen
            name="Welcome"
            component={OnboardingScreen.WelcomeScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
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
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;

const styles = StyleSheet.create({});
