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
import ButtonComponent from './../../components/ButtonComponent';
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
            Create an account to access all the features of Carbon GO
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

          <ButtonComponent
            title="Register"
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          />

          <Text style={styles.alreadyText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: COLORS.buttonGreen,
    marginBottom: 20,
  },
  alreadyText: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  loginLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: COLORS.purple,
    textAlign: 'center',
  },
});

export default RegisterScreen;
