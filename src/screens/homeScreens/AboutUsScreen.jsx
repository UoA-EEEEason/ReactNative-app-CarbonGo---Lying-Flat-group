import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import {
  StatusComponent,
} from './../../components';
import { hp, wp } from './../../utils/dimensions';
import { Icon, Text } from 'react-native-paper';

const AboutUsScreen = () => {
  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'About Us'} />
        <ScrollView>

          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('./../../assets/images/logo.png')}
            />
            <View style={styles.information}>
              <Text variant="titleLarge" style={styles.title}>About Us</Text>
              <Text variant="bodyMedium" style={styles.content}>Create a personalized carbon footprint awareness and tracking application. Use user data to analyze users’ behaviors and future trends. Make the carbon footprint visualized for users.</Text>
              <View style={styles.row}>
                <Icon source="email-open-outline" size={40} color="#23531E" />
                <Text style={styles.rowText}>lyingflat@auckland.ac.nz</Text>
              </View>
              <View style={styles.row}>
                <Icon source="cellphone-marker" size={40} color="#23531E" />
                <Text style={styles.rowText}>012-345-67890</Text>
              </View>
              <View style={styles.row}>
                <Icon source="map-marker-radius-outline" size={40} color="#23531E" />
                <Text style={styles.rowText}>University of Auckland</Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutUsScreen;

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
  image: {
    height: hp(20),
    width: wp(80),
    marginBottom: 60,
  },
  information: {
    width: wp(100),
    backgroundColor: COLORS.lightBackground,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 10,
    paddingBottom: hp(55),
  },
  title: {
    fontSize: 32,
    color: COLORS.textGreen,
    fontWeight: 'bold',
    paddingTop: 70,
    paddingLeft: 20,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: COLORS.textGreen,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    lineHeight: 34,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  rowText: {
    color: COLORS.textGreen,
    fontSize: 18,
    marginLeft: 20,
  },
});