import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticatedStack, UnAuthenticatedStack} from './stacks';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';

const MainNavigation = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
