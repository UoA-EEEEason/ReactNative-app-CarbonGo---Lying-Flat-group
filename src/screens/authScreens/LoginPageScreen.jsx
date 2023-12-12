import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import TextInputComponent from './../../components/TextInputCompnent';

const LoginPageScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      
      <SafeAreaView style={styles.safeArea}>
      <StatusComponent title={'Login'} />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image
            source={require('./../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.createText}>
            Login now to track all your carbon footprint!
          </Text>
          <TextInputComponent
            style={styles.input}
            label={'Email'}
          />
          <TextInputComponent
            style={styles.input}
            label={'Password'}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
            <Text style={styles.forgotPass}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGoogleContainer}>
            <View style={styles.iconGoogleContainer}>
              <Icon name="google" size={24} color="#575DFB" />
            </View>
            <Text style={styles.buttonGoogleText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.noAccountText}>
              No account?{' '}
              <Text onPress={() => navigation.navigate('Register')} style={styles.registerLink}>
                Register
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginPageScreen;

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
  forgotPass: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: COLORS.purple,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonGoogleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    borderRadius: 8,
    paddingVertical: 12,
    alignSelf: 'center',
    marginBottom: 10,
  },
  iconGoogleContainer: {
    marginRight: 10,
  },
  buttonGoogleText: {
    fontSize: 16,
    color: COLORS.black,
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
