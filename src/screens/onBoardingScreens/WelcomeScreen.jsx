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

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2500);
  }, []);

  return (
    <ImageBackground 
      source={require('./../../assets/images/background.png')} // 更换为你的背景图片路径
      style={styles.backgroundImage}
      resizeMode="cover" // 确保图片铺满整个屏幕
    >
      <StatusBar backgroundColor={COLORS.blue} barStyle={'light-content'} />

      {/* WELCOME VIEW */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
          {/* LOGO */}
          <Image 
            source={require('./../../assets/images/logo.png')}
            style={styles.logo} // 应用新的样式
            resizeMode="contain"
          />

          {/* WELCOME TEXT */}
          {/* <Text style={styles.welcomeText}>lying flat</Text> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

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
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%', // 设置左右边距为屏幕宽度的10%
  },
  logo: {
    width: '80%', // 限制图片宽度为容器宽度的80%
    height: undefined, // 高度未定义，将根据宽度自动调整以保持图片的宽高比
    aspectRatio: 1, // 可以设置特定的宽高比，如1表示正方形
  },
});
