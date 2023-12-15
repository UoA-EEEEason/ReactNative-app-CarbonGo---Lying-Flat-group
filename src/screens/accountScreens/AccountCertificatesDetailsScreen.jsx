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

const AccountCertificatesOutlinesScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'Certificates Details'} />
        <ScrollView>
          <View style={styles.container}>
            <ScrollView
              horizontal={true} // 启用水平滚动
              showsHorizontalScrollIndicator={false} // 隐藏水平滚动条
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}>
              <Image
                style={styles.image}
                source={require('./../../assets/images/KauriTreePhoto.jpg')}
              />
              <Image
                style={styles.image}
                source={require('./../../assets/images/Certificates.jpg')}
              />
              <Image
                style={styles.image}
                source={require('./../../assets/images/KauriTreePhoto.jpg')}
              />
            </ScrollView>
            <View style={styles.information}>
              <Text variant="titleLarge" style={styles.title}>
                Certificate of KAURI
              </Text>
              <Text variant="bodyMedium" style={styles.content}>
                This xx variety of sapling was planted by user xxx on
                xx/xx/xxxx. Thank you for your participation!
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountCertificatesOutlinesScreen;

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
    marginHorizontal:15
  },
});
