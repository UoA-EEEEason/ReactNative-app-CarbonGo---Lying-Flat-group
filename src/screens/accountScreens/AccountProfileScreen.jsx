import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  Icon,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { TextInput, Button } from 'react-native-paper';
import { hp, wp } from './../../utils/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { postProfile } from '../../redux/actions/profile';
import { logout } from '../../redux/actions/auth';

const TextInputComponent = ({ label, value, onChangeText, style }) => {
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

const ButtonComponent = (props) => (
  <Button
    mode="contained-tonal"
    onPress={props.onPress}
    buttonColor={COLORS.buttonGreen}
    textColor={COLORS.white}
    rippleColor={COLORS.buttonGreen}
    // uppercase
    style={{
      width: '80%',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 5,
      shadowColor: 'grew',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  >
    {props.name}
  </Button>
);

const AccountProfileScreen = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmitPress = async () => {
    dispatch(postProfile(id, username, email));
  };

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Profile'} />
        <ScrollView>
          <View style={styles.userAvatar}>
            <Image source={require('./../../assets/images/user.png')} />
          </View>

          <View style={styles.container}>
            <TextInputComponent
              style={styles.input}
              label={'ID'}
              value={id}
              onChangeText={setId}
            />
            <TextInputComponent
              style={styles.input}
              label={'Username'}
              value={username}
              onChangeText={setUsername}
            />
            <TextInputComponent
              style={styles.input}
              label={'Email'}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <ButtonComponent name={'Submit'} onPress={handleSubmitPress} />
            <ButtonComponent
              name={'Logout'}
              onPress={handleLogout}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountProfileScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },

  information: {
    width: wp(90),
    backgroundColor: COLORS.lightBackground,
    borderRadius: 20,
    paddingLeft: 10,
    paddingBottom: hp(5),
    marginTop: 30,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: COLORS.textGreen,
    fontWeight: 'bold',
    paddingTop: 60,
    paddingLeft: 15,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: COLORS.textGreen,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
  image: {
    width: wp(90),
    height: hp(60),
    borderRadius: 20,
    marginHorizontal: 15,
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
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 70,
    paddingVertical: 10,
    marginHorizontal: '10%',
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  userAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
