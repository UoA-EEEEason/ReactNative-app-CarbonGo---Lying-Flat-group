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
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {COLORS} from './../../constants/color/color';
  import {StatusComponent, ButtonComponent} from './../../components';
  import {Button, Card} from 'react-native-paper';
  import {useNavigation} from '@react-navigation/native';
  import {hp, wp} from './../../utils/dimensions';
  import TextInputComponent from './../../components/TextInputCompnent';
  
  const AccountProfileScreen = () => {
    const navigation = useNavigation();
    return (
      <ImageBackground
        source={require('./../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={{flex: 1}}>
          <StatusComponent title={'Profile'} />
          <ScrollView>
            <View style={styles.userAvatar}>
              <Image source={require('./../../assets/images/user.png')} />
            </View>
  
            <View style={styles.container}>
              <TextInputComponent style={styles.input} label={'ID'} />
              <TextInputComponent style={styles.input} label={'Username'} />
              <TextInputComponent style={styles.input} label={'Email'} />
            </View>
            <View>
              <ButtonComponent name={'Submit'} onPress={() => console.log('Pressed')}/>
              <ButtonComponent name={'Logout'} onPress={() => console.log('Pressed')}/>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
  
  export default AccountProfileScreen;
  
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
  
    information: {
      width: wp(90),
      backgroundColor: COLORS.lightBackground,
      borderRadius: 20,
      paddingLeft: 10,
      paddingBottom: hp(5),
      marginTop: 30,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 32,
      color: COLORS.textGreen,
      fontWeight: 'bold',
      paddingTop: 60,
      paddingLeft: 15,
      marginBottom: 20,
    },
    content: {
      fontSize: 16,
      color: COLORS.textGreen,
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      textAlign: 'justify',
      lineHeight: 30,
    },
    image: {
      width: wp(90),
      height: hp(60),
      borderRadius: 20,
      marginHorizontal: 15,
    },
    input: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'black',
      width: '80%',
      marginBottom: 20,
      borderRadius: 5,
    },
    button: {
      backgroundColor: 'transparent',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 70,
      paddingVertical: 10,
      marginHorizontal: '10%',
      marginTop: 5,
      marginBottom: 5,
      width: '80%',
      alignSelf: 'center',
    },
    buttonText: {
      color: 'black',
      textAlign: 'center',
    },
    userAvatar: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:30,
    },
  });
  