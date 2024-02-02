import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '../../constants/icons/icons';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { TextInput, Dialog, Portal, Button } from 'react-native-paper';

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

const LoginScreen = () => {
  const navigation = useNavigation();

  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // get auth state from redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        let message = 'Login failed. Please try again.';
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          message = 'Invalid email or password.';
        }
        setErrorMessage(message);
        setShowDialog(true);
      });
  };

  // solve login latency issue
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  }, [isAuthenticated, navigation]);

  // initial input text
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
            <Text style={styles.forgotPass}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGoogleContainer}>
            <View style={styles.iconGoogleContainer}>
              <FontAwesome name="google" size={24} color="#575DFB" />
            </View>
            <Text style={styles.buttonGoogleText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.noAccountText}>
              No account?{' '}
              <Text style={styles.registerLink}>
                Register
              </Text>
            </Text>
          </TouchableOpacity>

          <Portal>
            <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
              <Dialog.Title>Error</Dialog.Title>
              <Dialog.Content>
                <Text>{errorMessage}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => setShowDialog(false)}>Ok</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;

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
