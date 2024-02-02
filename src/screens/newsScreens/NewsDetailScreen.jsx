import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent} from './../../components';
import {hp, wp} from './../../utils/dimensions';
import {Text} from 'react-native-paper';
import { fDateTime } from './../../utils/format-time';

const NewsDetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'News'} />
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}} />
            <View style={styles.information}>
              <Text variant="titleLarge" style={styles.title}>
                {item.title}
              </Text>
              <Text variant="bodyMedium" style={styles.date}>
                {fDateTime(item.createdAt)}
              </Text>
              <Text variant="bodyMedium" style={styles.content}>
                {item.content}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NewsDetailScreen;

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
    height: hp(32),
    width: wp(90),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  information: {
    width: wp(90),
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
    paddingBottom: hp(45),
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    paddingTop: 10,
    marginBottom: 10,
  },
  date: {
    fontSize: 15,
    color: COLORS.grey,
    marginBottom: 10,
  },
  content: {
    fontSize: 15,
    color: COLORS.black,
    marginBottom: 10,
  },
});
