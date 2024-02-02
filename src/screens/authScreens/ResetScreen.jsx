import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/actions/auth';
import { Dialog, Portal, Button } from 'react-native-paper';

const TextInputComponent = ({ label, onChangeText, style, value }) => {
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
    />
  );
};

const ResetScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleResetPassword = () => {
    console.log(email)
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }

    dispatch(resetPassword(email))
      .then(() => {
        setDialogMessage('A password reset email has been sent. Please check your inbox.');
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
          navigation.navigate('Login');
        }, 3000);
      })
      .catch((error) => {
        let errorMessage = 'Failed to send reset email. Please try again.';
        if (error.code === 'auth/invalid-email') {
          errorMessage = 'The email address is not valid.';
        } else if (error.code === 'auth/user-not-found') {
          errorMessage = 'There is no user corresponding to the email address.';
        }
        setDialogMessage(errorMessage);
        setVisible(true);
      });
  };

  const handleEmailChange = value => {
    setEmail(value);
  };

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
            Enter your email to receive the password reset instructions.
          </Text>
          <TextInputComponent
            style={styles.input}
            label={'Email'}
            value={email}
            onChangeText={handleEmailChange}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Send Reset Email</Text>
          </TouchableOpacity>
        </ScrollView>
        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title>{dialogMessage.includes('sent') ? 'Success' : 'Error'}</Dialog.Title>
            <Dialog.Content>
              <Text>{dialogMessage}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
