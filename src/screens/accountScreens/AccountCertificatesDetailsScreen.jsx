import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent} from './../../components';
import {hp, wp} from './../../utils/dimensions';
import ImageCarousel from './ImageCarousel';

const AccountCertificatesOutlinesScreen = ({route}) => {
  const {item} = route.params;

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'Certificates Details'} />
        <ScrollView>
          <View style={styles.container}>
            <ImageCarousel items={item.cimage} />
            <View style={styles.information}>
              <Text variant="titleLarge" style={styles.title}>
                Certificate of KAURI
              </Text>
              <Text variant="bodyMedium" style={styles.content}>
                {item.desc}
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
