import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import TextInputComponent from './../../components/TextInputCompnent';

const ResetScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      
      <SafeAreaView style={styles.safeArea}>
      <StatusComponent title={'Reset Password'} />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image
            source={require('./../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.createText}>
            We have sent an email to your email account with a verification code!
          </Text>
          <TextInputComponent
            style={styles.input}
            label={'Email'}
          />
          <TextInputComponent
            style={styles.input}
            label={'New Password'}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ResetScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
  },
  createText: {
    fontSize: 16,
    width: '80%',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
  loginButton: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: COLORS.buttonGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
});
