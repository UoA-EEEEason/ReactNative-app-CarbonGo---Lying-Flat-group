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

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      
      <SafeAreaView style={styles.safeArea}>
      <StatusComponent title={'Register'} />
        <ScrollView contentContainerStyle={styles.scrollView}>
        
          <Image
            source={require('./../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.createText}>
            Create an account to access all the features of Carbon Go
          </Text>
          <TextInputComponent
            style={styles.input}
            label={'Email'}
          />
          <TextInputComponent
            style={styles.input}
            label={'Name'}
          />
          <TextInputComponent
            style={styles.input}
            label={'Password'}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.noAccountText}>
            Already have an account?
            <Text onPress={() => navigation.navigate('Login')} style={styles.registerLink}>
              {' '}Login
            </Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RegisterScreen;

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
  noAccountText: {
    fontSize: 12,
    color: COLORS.black,
    alignSelf: 'center',
    marginBottom: 20,
  },
  registerLink: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: COLORS.purple,
  },
});
