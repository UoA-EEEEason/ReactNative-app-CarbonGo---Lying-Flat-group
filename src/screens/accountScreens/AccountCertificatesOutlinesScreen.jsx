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
import { fetchCertificate,fetchCertificateImage } from '../../redux/actions/certificate';

const cardItems = [
  {
    id: 1,
    title: 'news1',
    date: '2023-04-05T14:30:00.000Z',
    content: 'This this news1',
    image: require('./../../assets/images/news1.png'),
  },
  {
    id: 2,
    title: 'news2',
    date: '2023-04-05T14:30:00.000Z',
    content: 'This this news1',
    image: require('./../../assets/images/news1.png'),
  },
  {
    id: 3,
    title: 'news3',
    date: '2023-04-05T14:30:00.000Z',
    content: 'This this news1',
    image: require('./../../assets/images/news1.png'),
  },
  {
    id: 4,
    title: 'news3',
    date: '2023-04-05T14:30:00.000Z',
    content: 'This this news1',
    image: require('./../../assets/images/news1.png'),
  },
  {
    id: 5,
    title: 'news3',
    date: '2023-04-05T14:30:00.000Z',
    content: 'This this news1',
    image: require('./../../assets/images/news1.png'),
  },

  // ... more items
];

const CertificatesCard = () => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CertificatesDetails')}>
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
  // Navigate to the Trees Detail screen with parameters
  const handlePressCard = item => {
    navigation.navigate('CertificatesDetails', { item });
  };

  // Get news data from redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCertificate());
  }, [dispatch]);

  useEffect(() => {
    certificate.map(item => {dispatch(fetchCertificateImage(item.id));})
  }, []);

  const certificate = useSelector(state => state.certificate).certificate;
  const certificateImage = useSelector(state => state.certificate).image;
    // console.log('certificate:', certificate);
    console.log('certificateImage:', certificateImage);

  // calculate whether the number of cards is odd
  const isOdd = cardItems.length % 2 !== 0;

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
