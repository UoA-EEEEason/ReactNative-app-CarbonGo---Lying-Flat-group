import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView>
        <View>
          <Text>SignUp screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;