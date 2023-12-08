import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from './../../constants/color/color';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    dispatch(register(email, password));
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView>
        <View>
          <Text>SignUp screen</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Sign Up" onPress={handleSignUp} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;