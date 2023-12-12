import React, { useEffect } from 'react';
import { COLORS } from '../../constants/color/color';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
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
  TextInputCompnent,
  ButtonComponent,
  IconButtonComponent,
  CardComponent,
} from './../../components';

const LoginPageScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Login'} />

        <ScrollView>
          <Image
            source={require('./../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.createText}>
            Login now to track all your carbon footprint!
          </Text>
          <TextInputCompnent
            style={styles.emailInput}
            label={'Email'}>
          </TextInputCompnent>
          <TextInputCompnent
            style={styles.passInput}
            label={'Password'}>
          </TextInputCompnent>
          <TouchableOpacity
            style={{
              width: '80%',
              height: '8%',
              alignSelf: 'center',
              marginTop: '10%',
              borderRadius: 5,
              shadowColor: 'grew',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.buttonGreen,

            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontSize: 20, color: COLORS.white, }}>Login</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>
              No account? Register
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
  demoText: {
    fontSize: 30,
    color: COLORS.textGreen,
    textAlign: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: '10%',
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 3,
    position: 'absolute',
    top: 1,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 16,
  },
  createText: {
    fontSize: 16,
    color: COLORS.black,
    position: 'absolute',
    marginLeft: '10%',
    marginTop: '48%',
  },
  emailInput: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center',
    marginTop: '60%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  nameInput: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center',
    marginTop: '10%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  passInput: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center',
    marginTop: '10%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  loginLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: COLORS.purple,
    marginTop: '15%',
    alignSelf: 'center',
  },
  alreadyText: {
    fontSize: 20,
    color: COLORS.black,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '130%',
  },
  forgotPass: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: COLORS.purple,
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonGoogleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: '8%',
    width: '80%',
    borderRadius: 8,
    marginTop: '10%',
    alignSelf: 'center',
  },
  iconGoogleContainer: {
    marginRight: 10,
  },
  buttonGoogleText: {
    fontSize: 16,
    color: COLORS.black,
  },
  registerLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: COLORS.purple,
    marginTop: '10%',
    marginBottom: '10%',
  },
  noAccountText: {
    fontSize: 16,
    color: COLORS.black,
    alignSelf: 'center',
    top: '1%',
  },
});
