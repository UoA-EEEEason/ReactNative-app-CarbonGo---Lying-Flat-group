import React from 'react';
import { COLORS } from '../../constants/color/color';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInputComponent from './../../components/TextInputCompnent';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {
  StatusComponent,
} from './../../components';
import { Entypo } from './../../constants/icons/icons';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      
      <SafeAreaView style={styles.safeArea}>
      <StatusComponent title={'Welcome'} />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image
            source={require('./../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>
            Welcome to
          </Text>
          <Text style={styles.carbonGoText}>
            Carbon Go
          </Text>
          <Text style={styles.createText}>
            An app to track your carbon footprint
          </Text>
          <Text style={styles.createText}>
            Let's Get Started...
          </Text>

          <TouchableOpacity style={styles.buttonGoogleContainer}>
            <View style={styles.iconGoogleContainer}>
              <Icon name="google" size={24} color="#575DFB" />
            </View>
            <Text style={styles.buttonGoogleText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonEmailContainer}
            onPress={() => navigation.navigate('Register')}>
            <View style={styles.iconEmailContainer}>
              <Entypo name="email" size={24} color="black" />
            </View>
            <Text style={styles.buttonEmailText}>Continue with Email</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.noAccountText}>
              Already have an account?{' '}
              <Text onPress={() => navigation.navigate('Login')} style={styles.registerLink}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;

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
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    width: '80%',
    color: COLORS.black,
    marginBottom: 2,
  },
  carbonGoText: {
    fontSize: 26,
    width: '80%',
    color: COLORS.purple,
    marginBottom: 2,
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
    paddingVertical: 12, // Adjust for button height
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
    marginBottom: 20,
  },
  iconGoogleContainer: {
    marginRight: 10,
  },
  buttonGoogleText: {
    fontSize: 16,
    color: COLORS.black,
  },
  buttonEmailContainer: {
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
  iconEmailContainer: {
    marginRight: 10,
  },
  buttonEmailText: {
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