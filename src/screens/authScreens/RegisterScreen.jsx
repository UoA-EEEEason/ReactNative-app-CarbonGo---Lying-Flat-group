import React, { useState, useEffect } from 'react';
import {
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
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { TextInput } from 'react-native-paper';

const TextInputComponent = ({ label, value, onChangeText, style, secureTextEntry }) => {
  const customTheme = {
    colors: {
      primary: 'black',
    },
  };

  return (
    <TextInput
      label={label}
      value={value}
      mode="flat"
      onChangeText={onChangeText}
      style={style}
      theme={customTheme}
      secureTextEntry={secureTextEntry}
    />
  );
};

const RegisterScreen = () => {
  const navigation = useNavigation();

  // get auth state from redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleRegister = async () => {
    dispatch(register(email, password, username));
    if (isAuthenticated) {
      navigation.navigate('Home')
    }
  };

  // solve login latency issue
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home')
    }
  }, [isAuthenticated]);

    // initial input text
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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
            value={email}
            onChangeText={setEmail}
          />
          <TextInputComponent
            style={styles.input}
            label={'Password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInputComponent
            style={styles.input}
            label={'Username'}
            value={username}
            onChangeText={setUsername}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleRegister}>
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
