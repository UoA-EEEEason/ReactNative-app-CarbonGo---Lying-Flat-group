import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import TestComponent from './../../components/TestComponent';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView>
        <View>
          <Text>Login screen</Text>
          <TestComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;