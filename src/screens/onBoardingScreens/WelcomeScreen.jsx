import React, {useEffect} from 'react';
import {COLORS} from '../../constants/color/color';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import {
  AntDesignIcon,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from './../../constants/icons/icons';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  //   useEffect(() => {
  //     setTimeout(() => navigation.replace('Tests'), 2500);
  //   }, []);

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        {/* <StatusComponent title={'Demo screen'} /> */}
        {/* LOGO */}
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <ScrollView>
          <View>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.carbonText}>Carbon Go</Text>
            <Text style={styles.appText}>
              An app to track your carbon footprint
            </Text>
            <Text style={styles.startText}>Let’s Get Started...</Text>
            {/* <GoogleLoginButton/> */}
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
            <Text style={styles.alreadyText}>Already have an account?</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>

            {/* <TextInputCompnent label={'Demo textInput'} /> */}
            {/* <ButtonComponent name={'Demo Button'} />
                    <IconButtonComponent name={'Demo IconButton'} />
                    <CardComponent title={'Demo Card'} description={'Demo Card Description'}/> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
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
    top: 72,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 20,
    color: COLORS.black,
    position: 'absolute',
    marginLeft: '8%',
    marginTop: '40%',
  },
  carbonText: {
    fontSize: 30,
    color: COLORS.purple,
    position: 'absolute',
    marginLeft: '8%',
    marginTop: '48%',
  },
  appText: {
    fontSize: 20,
    color: COLORS.black,
    position: 'absolute',
    marginLeft: '8%',
    marginTop: '60%',
  },
  startText: {
    fontSize: 20,
    color: COLORS.black,
    position: 'absolute',
    marginLeft: '8%',
    marginTop: '80%',
  },
  alreadyText: {
    fontSize: 20,
    color: COLORS.black,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '125%',
  },
  buttonGoogleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: '80%',
    borderRadius: 8,
    marginTop: '90%',
    alignSelf: 'center',
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
    backgroundColor: 'transparent',
    height: 40,
    width: '80%',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '9%',
    alignSelf: 'center',
  },
  iconEmailContainer: {
    marginRight: 10,
  },
  buttonEmailText: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: COLORS.purple,
    marginTop: '15%',
    alignSelf: 'center',
  },
});
