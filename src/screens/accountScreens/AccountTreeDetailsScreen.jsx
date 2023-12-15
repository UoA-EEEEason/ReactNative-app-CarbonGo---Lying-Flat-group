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
} from 'react-native';
import React from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent, ButtonComponent} from './../../components';
import {Button, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from './../../utils/dimensions';

const TreeComponent = () => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.ContextContainer}>
        <Text style={styles.title}>KAURI</Text>
        <View>
          <Text style={styles.description}>
            One of the great trees of New Zealand, once covering 1.2 million ha,
            is under threat from Die Back. Natural zone is from Hamilton to
            Northland. Join the effort in reestablishing one of the great NZ
            Tress.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const AccountTreeDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'Tree Details'} />
        <ScrollView>
          <View>
            <View>
              <Image
                source={require('./../../assets/images/KauriTreePhoto.jpg')}
                style={styles.pictureStyle}></Image>
            </View>
            <View>
              <TreeComponent></TreeComponent>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountTreeDetailsScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  pictureStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(90),
    height:hp(60),
    marginBottom: 30,
    marginTop: 30,
    borderRadius: 20,
    marginHorizontal:20
  },
  ContextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9F3D9',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 0,
    marginRight: 0,
  },
  title: {
    fontSize: 32,
    color: COLORS.textGreen,
    fontWeight: 'bold',
    paddingTop: 60,
    paddingLeft: 15,
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    color: COLORS.textGreen,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
});
