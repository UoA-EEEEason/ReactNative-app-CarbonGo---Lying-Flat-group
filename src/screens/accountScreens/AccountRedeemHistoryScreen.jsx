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
import React, { useEffect } from 'react';
import { COLORS } from './../../constants/color/color';
import { hp, wp, statusBarHeight } from './../../utils/dimensions';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../../redux/actions/carbonFootprint';
import { Ionicons } from './../../constants/icons/icons';

const StatusComponent = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          position: 'relative',
          paddingTop: statusBarHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingBottom: 15,
        }}>
        {/* GO BACK BUTTON */}
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Ionicons name="arrow-back" size={28} color={COLORS.green} />
        </TouchableOpacity>

        {/* TITLE */}
        <View>
          <Text style={{ color: COLORS.green, fontSize: 22 }}>{title}</Text>
        </View>

        {/* NULL */}
        <View></View>
      </View>
    </View>
  );
};

const CardComponent = ({ action, diff, points }) => (
  <Card style={styles.card}>
    <View style={styles.cardLayout}>
      <Text style={styles.text}>Name: {action}</Text>
      <Text style={styles.text}>Amount: {diff}</Text>
      <Text style={styles.text}>Points Left: {points}</Text>
    </View>
  </Card>
);

const AccountRedeemHistoryScreen = () => {
  const navigation = useNavigation();

  // get auth state from redux
  const uid = useSelector(state => state.auth.uid);

  // Get history data from redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHistory(uid));
  }, [dispatch]);
  const history = useSelector(state => state.carbonFootprint).history ?? [];

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Redeem History'} />
        <ScrollView>
          <View>
            {history.map((item, index) => (
              <CardComponent
                key={index}
                action={item.action ?? 'null'}
                diff={item.diff ?? 'null'}
                points={item.points ?? 'null'}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountRedeemHistoryScreen;

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
  card: {
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: COLORS.cardBackground,
  },
  cardLayout: {
    flexDirection: 'col',
    alignItems: 'left',
    padding: 10,
  },
  text: {
    fontSize: wp(3.5),
    color: COLORS.black,
    marginBottom: hp(1),
  },
});
