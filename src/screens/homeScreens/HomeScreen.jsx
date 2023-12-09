import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import {StatusComponent} from './../../components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusComponent title={'Home screen'}/>
      <ScrollView>
        <View>
          <Text>Home screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;