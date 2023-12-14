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
import React, {useEffect} from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent} from './../../components';
import {hp, wp} from './../../utils/dimensions';
import {Card, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMessage} from '../../redux/actions/message';

const CardComponent = ({title, content}) => (
  <Card style={styles.card}>
    <View style={styles.cardLayout}>
      <Image
        source={require('./../../assets/images/logoCircle.png')}
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  </Card>
);

const MessageScreen = () => {
  const navigation = useNavigation();

  // Get news data from redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  const message = useSelector(state => state.message).message;
  //   console.log('news:', message);

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'News'} />
        <ScrollView>
          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('News');
                console.log('News');
              }}
              style={styles.tabLeftButton}>
              <Text style={styles.tabText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('Messages');
              }}
              style={styles.tabRightButton}>
              <Text style={styles.tabText}>Messages</Text>
            </TouchableOpacity>
          </View>
          <View>
            {message.map(item => (
              <CardComponent
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MessageScreen;

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
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: hp(5),
    width: wp(64),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: COLORS.buttonGreen,
    borderRadius: 20,
    marginBottom: 10,
  },
  tabLeftButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(32),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: COLORS.white,
  },
  tabRightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(32),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLORS.buttonGreen,
  },
  tabText: {
    fontSize: 15,
    color: COLORS.black,
  },
  card: {
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: COLORS.cardBackground,
  },
  cardLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    height: hp(10),
    width: wp(20),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardText: {
    flex: 1,
    paddingLeft: wp(4),
  },
  title: {
    fontSize: wp(5),
    color: COLORS.black,
    marginBottom: hp(1),
  },
  content: {
    fontSize: wp(4),
    color: COLORS.black,
  },
});
