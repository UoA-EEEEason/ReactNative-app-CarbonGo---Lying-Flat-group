import {
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Text,
    ImageBackground,
    StyleSheet,
    Icon,
    Image,
  } from 'react-native';
  import React from 'react';
  import {COLORS} from './../../constants/color/color';
  import {StatusComponent, ButtonComponent} from './../../components';
  import {Button, Card} from 'react-native-paper';
  import {useNavigation} from '@react-navigation/native';
  import {hp, wp} from './../../utils/dimensions';
  
  const HistoryComponent = () => {
    return (
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.ContextContainer}>
          <View style={styles.Container1}>
                <Text style={styles.description}>Name: get the tree</Text>
                <Text style={styles.description}>Amount: -11 points</Text>
                <Text style={styles.description}>Points left: 19 points</Text>
      
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const AccountRedeemHistoryScreen = () => {
    const navigation = useNavigation();
    return (
      <ImageBackground
        source={require('./../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={{flex: 1}}>
          <StatusComponent title={'Redeem History'} />
          <ScrollView>
            <View>
              <View>
                <HistoryComponent />
              </View>
              <View></View>
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
    pictureStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: hp(32),
      width: wp(50),
      marginHorizontal: 110,
    },
    ContextContainer: {
      flex: 1,
      backgroundColor: '#D9F3D9',
      borderRadius: 20,
      width: '80%',
      alignSelf: 'center',
      marginTop: 20,
      shadowColor: 'grew',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
    description: {
      marginHorizontal: 30,
      lineHeight: 30,
      fontSize: 14,
      alignItems: 'center',
    },
  });
  