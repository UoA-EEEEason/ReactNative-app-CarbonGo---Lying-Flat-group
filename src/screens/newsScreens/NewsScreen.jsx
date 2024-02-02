import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { hp, wp } from './../../utils/dimensions';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/actions/news';
import { truncateText } from './../../utils/helpser';
import { fDateTime } from './../../utils/format-time';

const CardComponent = ({ image, title, content, date, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Card
      style={{
        width: wp(80),
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: COLORS.cardBackground,
      }}>
      <Card.Cover
        source={image}
        style={{
          marginBottom: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{truncateText(content, 35)}</Text>
        <Text variant="bodyMedium" style={{ color: COLORS.grey }}>
          {fDateTime(date).toString()}
        </Text>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

const NewsScreen = () => {
  const navigation = useNavigation();
  // Navigate to the NewsDetail screen with parameters
  const handlePressCard = item => {
    navigation.navigate('NewsDetail', { item });
  };

  // Get news data from redux state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const news = useSelector(state => state.news).news;

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'News'} />
        <ScrollView>
          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => {
                // console.log('News');
              }}
              style={styles.tabLeftButton}>
              <Text style={styles.tabText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Message');
              }}
              style={styles.tabRightButton}>
              <Text style={styles.tabText}>Messages</Text>
            </TouchableOpacity>
          </View>
          <View>
            {news.map(item => (
              <CardComponent
                key={item.id}
                image={{ uri: item.image }}
                title={item.title}
                date={fDateTime(item.date).toString()}
                content={item.content}
                onPress={() => handlePressCard(item)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NewsScreen;

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
    backgroundColor: COLORS.white,
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
    backgroundColor: COLORS.buttonGreen,
  },
  tabRightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(32),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLORS.white,
  },
  tabText: {
    fontSize: 15,
    color: COLORS.black,
  },
});
