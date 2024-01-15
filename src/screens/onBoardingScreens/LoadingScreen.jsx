import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {COLORS} from '../../constants/color/color';
import {useNavigation} from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.replace('Welcome'), 3000);
  }, []);

  return (
    <ImageBackground 
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />

      {/* WELCOME VIEW */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
          {/* LOGO */}
          <Image 
            source={require('./../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* WELCOME TEXT */}
          {/* <Text style={styles.welcomeText}>lying flat</Text> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 40,
    color: COLORS.white,
  },
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
    width: '80%',
    height: undefined,
    aspectRatio: 1,
  },
});
