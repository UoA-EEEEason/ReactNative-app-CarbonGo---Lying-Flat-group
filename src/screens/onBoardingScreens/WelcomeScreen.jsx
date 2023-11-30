import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {COLORS} from '../../constants/color/color';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2500);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: COLORS.blue, flex: 1}}>
      <StatusBar backgroundColor={COLORS.blue} barStyle={'light-content'} />

      {/* WELCOME VIEW */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
          {/* LOGO */}
          <Image source={require('./../../assets/images/logo.png')} />

          {/* WELCOME TEXT */}
          <Text style={styles.welcomeText}>lying flat</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 40,
    color: COLORS.white,
  },
});
