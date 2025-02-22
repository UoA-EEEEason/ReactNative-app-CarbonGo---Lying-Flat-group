import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Account,
  Tests,
  Auth,
  OnboardingScreen,
  Home,
  News,
} from '../../screens';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        name="CertificatesOutlines"
        component={Account.AccountCertificatesOutlinesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CertificatesDetails"
        component={Account.AccountCertificatesDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TreeDetails"
        component={Account.AccountTreeDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RedeemHistory"
        component={Account.AccountRedeemHistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Account.AccountProfileScreen}
        options={{ headerShown: false }}
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
        name="Reset"
        component={Auth.ResetScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tests"
        component={Tests.TestsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Walk"
        component={Home.WalkScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bus"
        component={Home.BusScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Elec"
        component={Home.SaveElecScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Food"
        component={Home.SaveFoodScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={Home.AboutUsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DataAnalysis"
        component={Home.DataAnalysisScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreditMall"
        component={Account.CreditMallScreen}
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

export default AuthenticatedStack;

const styles = StyleSheet.create({});
