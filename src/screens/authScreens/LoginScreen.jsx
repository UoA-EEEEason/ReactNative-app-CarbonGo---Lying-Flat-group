import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS } from './../../constants/color/color';
import TestComponent from './../../components/TestComponent';
import auth from '@react-native-firebase/auth';
import {createUser,logout} from './../../hooks/firebase';

const LoginScreen = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  return (
    <View>
      {(!user) ? <Text>Login</Text>:<Text>Welcome {user.email}</Text> }
      <Button title="create user" onPress={createUser} />
      <Button title="logout" onPress={logout} />
    </View>
  )
};

export default LoginScreen;