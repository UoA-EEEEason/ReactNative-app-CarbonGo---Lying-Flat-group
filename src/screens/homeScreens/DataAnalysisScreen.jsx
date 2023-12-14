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
  import React from 'react';
  import { COLORS } from './../../constants/color/color';
  import {
    StatusComponent,
  } from './../../components';
  import { hp, wp } from './../../utils/dimensions';
  import { Icon, Text } from 'react-native-paper';
  
  const DataAnalysisScreen = () => {
    return (
      <ImageBackground
        source={require('./../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <StatusComponent title={'Data Analysis'} />
          <ScrollView>
  
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('./../../assets/images/logo.png')}
              />
              <View style={styles.information}>
                <Text variant="titleLarge" style={styles.title}>About Us</Text>
                <Text variant="bodyMedium" style={styles.content}>Create a personalized carbon footprint awareness and tracking application. Use user data to analyze users’ behaviors and future trends. Make the carbon footprint visualized for users.</Text>
                <View style={styles.row}>
                  <Icon name="email" size={20} color="#000" />
                  <Text style={styles.rowText}>First line of text</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="book" size={20} color="#000" />
                  <Text style={styles.rowText}>Second line of text</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="rocket" size={20} color="#000" />
                  <Text style={styles.rowText}>Third line of text</Text>
                </View>
              </View>
  
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
  
  export default DataAnalysisScreen;
  
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
      height: hp(20),
      width: wp(80),
      marginBottom: 20,
    },
    information: {
      width: wp(100),
      backgroundColor: COLORS.lightBackground,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingLeft: 10,
      paddingBottom: hp(55),
    },
    title: {
      fontSize: 32,
      color: COLORS.textGreen,
      fontWeight: 'bold',
      paddingTop: 70,
      paddingLeft: 20,
      marginBottom: 20,
    },
    content: {
      fontSize: 16,
      color: COLORS.textGreen,
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      textAlign: 'justify',
      lineHeight: 34,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    rowText: {
      fontSize: 16,
      marginLeft: 10,
    },
  });