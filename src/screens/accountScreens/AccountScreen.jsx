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
import React, { useEffect } from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from './../../utils/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTree } from '../../redux/actions/tree';
import { fetchPoints } from '../../redux/actions/carbonFootprint';
import { fetchUsername } from '../../redux/actions/auth';
import { truncateText } from './../../utils/helpser';
import {Avatar} from 'react-native-paper';

const CustomCard = ({ name, image, onPress }) => (
  <View style={{ margin: 10 }}>
    <TouchableOpacity onPress={onPress}>
      <Card
        mode='contained'
        style={{
          flex: 1,
          width: wp(40),
          height: wp(40),
          backgroundColor: COLORS.cardBackground,
        }}>
        <Card.Cover
          source={image}
          style={{
            height: wp(30),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        <Card.Content style={{ padding: 10, alignSelf: 'center' }}>
          <Text variant="titleLarge" style={{ color: COLORS.black }}>{truncateText(name, 11)}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);

const AccountScreen = () => {
  const navigation = useNavigation();

  const uid = useSelector(state => state.auth.uid);

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  // Navigate to the Trees Detail screen with parameters
  const handlePressCard = item => {
    navigation.navigate('TreeDetails', { item });
  };

  // Get news data from redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTree());
    dispatch(fetchPoints(uid));
    dispatch(fetchUsername(uid));
  }, [dispatch]);

  const allPoints = useSelector(state => state.carbonFootprint).points ?? 0;
  const username = useSelector(state => state.auth.username) ?? 'User';
  const tree = useSelector(state => state.tree).tree;
  const limitedTree = tree.slice(0, 4);

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Account'} />
        <ScrollView>
          <View container>
            <View style={styles.UserInfoCard}>
              <View style={styles.UserLayout}>
                <TouchableOpacity style={styles.userButton} onPress={navigateToProfile}>
                  <View style={styles.userIcon}>
                    <Avatar.Image size={50} source={require('./../../assets/images/avatar_1.jpg')} />
                  </View>
                  <Text style={styles.userText}>{truncateText(username, 6)}</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 14, color: COLORS.textGreen, fontWeight: 'bold', marginLeft: wp(10) }}>My carbon foot</Text>
              </View>

              <View style={styles.PointsText}>
                <Text style={{ fontSize: hp(5), color: COLORS.textGreen, fontWeight: 'bold', marginRight: 10 }}>{allPoints}</Text>
                <Text style={{ fontSize: 13, color: COLORS.textGreen, lineHeight: hp(5) }}>points</Text>
              </View>

              <Button
                style={styles.HistoryButton}
                onPress={() => navigation.navigate('RedeemHistory')}
              >
                <Text style={styles.buttonText}>Remeed History &gt;</Text>
              </Button>
            </View>

            {/* My Certificates button */}
            <Button
              style={styles.CertificatesButton}
              onPress={() => navigation.navigate('CertificatesOutlines')}>
              <Text style={styles.buttonText}>My Certificates &gt;</Text>
            </Button>

            {/* Carbon Credit Mall */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('CreditMall');
              }}>
              <Text style={styles.textTitle}>Carbon Credit Mall {' >'} </Text>
            </TouchableOpacity>


            {/* cards components */}
            <View style={styles.CardsDisplay}>
              {limitedTree.map((item) => (
                <CustomCard
                  key={item.id}
                  image={{ uri: item.image }}
                  name={item.name}
                  onPress={() => handlePressCard(item)} />
              ))}
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
  UserInfoCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: wp(90),
    height: wp(55),
    marginTop: 20,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 18,
  },
  CardTab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignSelf: 'center',
    width: wp(90),
    height: wp(15),
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginHorizontal: 20,
    backgroundColor: COLORS.lightGrey,
  },
  CardTabText: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 20,
    fontSize: 13,
    color: COLORS.textGreen,
    fontWeight: 'bold',
  },
  textTitle: {
    alignSelf: 'flex-start',
    marginTop: hp(2),
    marginBottom: 10,
    marginLeft: wp(6),
    color: COLORS.textGreen,
    fontSize: 20,
  },
  CertificatesButton: {
    flex: 1,
    alignSelf: 'flex-end',
    padding: 20,
  },
  buttonText: {
    fontSize: 13,
    color: COLORS.textGreen,
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
    width: 170,
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
    marginVertical: wp(5),
    alignItems: 'center',
    paddingTop: 20,
  },
  PointsText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: wp(12)
  },
  CardsDisplay: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  HistoryButton: {
    alignSelf: 'flex-start',
    padding: 20,
  },
});
