import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView>
        <View>
          <Text>Yixuan Peng</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;