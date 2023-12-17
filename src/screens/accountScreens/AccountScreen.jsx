import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent, ButtonComponent } from './../../components';
import { Button, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from './../../utils/dimensions';

const cartItems = [
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

  // ... more items
];

const CustomCard = ({ imageUrl }) => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('TreeDetails')}>
        <Card
          mode='contained'
          style={{
            flex: 1,
            width: wp(40),
            height: wp(40),
            backgroundColor: COLORS.cardBackground,
          }}>
          <Card.Cover
            source={{ uri: imageUrl }}
            style={{
              height: wp(30),
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}

          />
          <Card.Content style={{ padding: 10, alignSelf: 'center' }}>
            <Text variant="titleLarge" style={{ color: COLORS.black }}>Get it now!</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const AccountScreen = () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  // Navigate to the Trees Detail screen with parameters
  const handlePressCard = item => {
    navigation.navigate('TreeDetails', { item });
  };

  // caculate whether the number of cards is odd
  const isOdd = cartItems.length % 2 !== 0;

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Account'} />
        <ScrollView>
          <View>
            <Card
              style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: 20,
                backgroundColor: '#F2FDEA',
                color: '#898A8D',
              }}>
              <View style={styles.UserLayout}>

                <TouchableOpacity style={styles.userButton} onPress={navigateToProfile}>
                  <View style={styles.userIcon}>
                    <Image
                      source={require('./../../assets/images/user.png')}
                      style={styles.userAvatar}
                    />
                  </View>
                  <Text style={styles.userText}>User</Text>
                </TouchableOpacity>
                <View style={styles.PointsText}>
                  <Text>My carbon foot</Text>
                  <Text>30 points</Text>
                </View>
              </View>

              <Button onPress={() => navigation.navigate('RedeemHistory')}>
                Remeed History
              </Button>
              <View style={styles.container1}>
                <Text>15 points redeemed</Text>
                <Text>15 points convertible</Text>
              </View>
            </Card>

            <Button
              style={styles.CertificatesButton}
              onPress={() => navigation.navigate('CertificatesOutlines')}>
              <Text style={styles.buttonText}>My Certificates</Text>
            </Button>

            <Text style={styles.textTitle}>Carbon Credit Mall</Text>

            {/* cards components */}
            <View style={styles.CardsDisplay}>
              {cartItems.map((item) => (
                <CustomCard key={item.id} imageUrl="https://picsum.photos/700" onPress={() => handlePressCard(item)} />
              ))}
              {isOdd && <View
                style={{
                  margin: 10,
                  width: wp(40),
                  height: wp(40),
                }} />}
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountScreen;

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
  buttonCertificates: {
    fontSize: 30,
    textAlign: 'left',
  },
  textCard: {
    color: '#898A8D',
    alignItems: 'Right',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  child1: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#F2FDEA',
    color: '#898A8D',
  },
  textTitle: {
    color: '#23531E',
    marginTop: 40,
    marginBottom: 10,
    fontSize: 20,
    paddingHorizontal: 40,
  },

  textStyle: {
    color: '#23531E',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  CertificatesButton: {
    textAlign: 'center',
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: 'hidden',
    width: 132,
    height: 52,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: 20
  },
  userAvatar: {
    width: '100%',
    height: '100%',
  },

  userText: {
    color: COLORS.textGreen,
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold'

  },
  UserLayout: {
    flexDirection: 'row',

    marginVertical: 30,

  },
  PointsText: {
    marginHorizontal: 60
  },
  CardsRowcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  CardsDisplay: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});
