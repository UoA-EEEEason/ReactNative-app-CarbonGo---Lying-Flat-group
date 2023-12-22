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
            <Text variant="titleLarge" style={{ color: COLORS.black }}>{name}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
  
  const AccountScreen = () => {
    const navigation = useNavigation();
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
    }, [dispatch]);
    const tree = useSelector(state => state.tree).tree;
    //   console.log('news:', message);
  
    // calculate whether the number of cards is odd
    const isOdd = tree.length % 2 !== 0;
  
    return (
      <ImageBackground
        source={require('./../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={{ flex: 1 }}>
          <StatusComponent title={'Carbon Credit Mall'} />
          <ScrollView>
            <View container>
  
              {/* cards components */}
              <View style={styles.CardsDisplay}>
                {tree.map((item) => (
                  <CustomCard
                    key={item.id}
                    image={{ uri: item.image }}
                    name={item.name}
                    onPress={() => handlePressCard(item)} />
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
    UserInfoCard: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      width: wp(90),
      height: wp(45),
      marginTop: 20,
      backgroundColor: COLORS.cardBackground,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
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
  