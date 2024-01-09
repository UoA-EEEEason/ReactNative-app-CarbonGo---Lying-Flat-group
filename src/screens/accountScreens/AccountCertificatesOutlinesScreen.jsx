import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { StatusComponent } from './../../components';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from './../../utils/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCertificate } from '../../redux/actions/certificate';

const CertificatesCard = ({ onPress }) => {
  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flex: 1,
            width: wp(40),
            height: wp(60),
            borderRadius: 5,
          }}>
          <Image
            resizeMode="cover"
            source={require('./../../assets/images/Certificates.jpg')}
            style={{ width: '100%', height: '100%', borderRadius: 5, }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const AccountCertificatesOutlinesScreen = () => {
  const navigation = useNavigation();

  // get auth state from redux
  const uid = useSelector(state => state.auth.uid);

  // Get certificate data from redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCertificate(uid));
  }, [dispatch]);

  const certificate = useSelector(state => state.certificate).certificate;
  // console.log('certificate:',certificate)

  // calculate whether the number of cards is odd
  const isOdd = certificate.length % 2 !== 0;


  // Navigate to the Trees Detail screen with parameters
  const handlePressCard = item => {
    navigation.navigate('CertificatesDetails', { item });
  };

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Certificates'} />
        <ScrollView>
          {/* cards components */}
          <View style={styles.CardsDisplay}>
            {certificate.map(item => (
              <CertificatesCard
                key={item.id}
                onPress={() => handlePressCard(item)}
              />
            ))}
            {isOdd && (
              <View
                style={{
                  margin: 10,
                  width: wp(40),
                  height: wp(40),
                }}
              />
            )}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
  CardsDisplay: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
