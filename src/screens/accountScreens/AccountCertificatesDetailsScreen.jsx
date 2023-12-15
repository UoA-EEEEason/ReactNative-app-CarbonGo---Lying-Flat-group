import {
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Text,
    ImageBackground,
    StyleSheet,
    Icon,
  } from 'react-native';
  import React from 'react';
  import {COLORS} from './../../constants/color/color';
  import {StatusComponent, ButtonComponent} from './../../components';
  import {Button, Card} from 'react-native-paper';
  import { useNavigation } from '@react-navigation/native';
  



  const AccountCertificatesOutlinesScreen = () => {
    const navigation = useNavigation();
    return (
      <ImageBackground
        source={require('./../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={{flex: 1}}>
          <StatusComponent title={'Certificates Details'} />
          <ScrollView>
            <View>
    
            
  
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
  });