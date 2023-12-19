import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { hp, wp } from './../../utils/dimensions';


const AccountTreeDetailsScreen = ({ route }) => {
  const { item } = route.params;
  
  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Tree Details'} />
        <ScrollView>
          <View>
            <View>
              <Image
                source={require('./../../assets/images/KauriTreePhoto.jpg')}
                style={styles.pictureStyle}></Image>
            </View>
            <View>
              <View style={styles.ContextContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <View>
                  <Text style={styles.description}>
                    {item.desc}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.loginButton}>
                  <Text style={styles.buttonText}>{item.price} Points Get It!</Text>
                </TouchableOpacity>
              </View>
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
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp(90),
    height: hp(40),
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 20,
    marginHorizontal: 20
  },
  ContextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#D9F3D9',
    borderRadius: 20,
    marginTop: 20,
    width: wp(90),
  },
  title: {
    fontSize: 32,
    color: COLORS.textGreen,
    fontWeight: 'bold',
    paddingTop: 30,
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: COLORS.textGreen,
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
  loginButton: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: COLORS.buttonGreen,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
});
