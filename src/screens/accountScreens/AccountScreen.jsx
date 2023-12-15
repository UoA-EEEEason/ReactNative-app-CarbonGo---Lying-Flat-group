import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Icon,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent, ButtonComponent} from './../../components';
import {Button, Card, FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';






  
const CustomCard = ({imageUrl, title, buttonPress}) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.child1}>
      <Card.Cover source={{uri: imageUrl}} />
      <Text style={styles.textStyle}>{title}</Text>
      <Button onPress={() => navigation.navigate('TreeDetails')}>
        Get it!
      </Button>
    </Card>
  );
};

// CardContainer
const CardContainer = ({imageUrl, title, onPress}) => {
  return (
    <View style={styles.container1}>
      <CustomCard imageUrl={imageUrl} title={title} buttonPress={onPress} />
      <CustomCard imageUrl={imageUrl} title={title} buttonPress={onPress} />
    </View>
  );
};

const AccountScreen = () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
 
    navigation.navigate('Proile');
  };

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'Account'} />
        <ScrollView>
          <View>
            <Card
              style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: 20,
                backgroundColor: '#F2FDEA',
                color: '#898A8D',
              }}>
              <View style={styles.UserLayout}>
                
                <TouchableOpacity style={styles.userButton} onPress={navigateToProfile}>
                  <View style={styles.userIcon}>
                    <Image
                      source={require('/Users/zhaojiaqi/Lying-Flat-2/src/assets/images/user.png')} // 替换为您的用户头像图片路径
                      style={styles.userAvatar}
                    />
                  </View>
                  <Text style={styles.userText}>User</Text>
                </TouchableOpacity>
                <View style = {styles.PointsText}>
                  <Text>My carbon foot</Text>
                  <Text>30 points</Text>
                </View>
              </View>

              <Button onPress={() => navigation.navigate('RedeemHistory')}>
                Remeed History
              </Button>
              <View style={styles.container1}>
                <Text>15 points redeemed</Text>
                <Text>15 points convertible</Text>
              </View>
            </Card>

            <Button
              style={styles.CertificatesButton}
              onPress={() => navigation.navigate('CertificatesOutlines')}>
              <Text style={styles.buttonText}>My Certificates</Text>
            </Button>

            <Text style={styles.textTitle}>Carbon Credit Mall</Text>

            <View style={styles.container1}>
              <CustomCard
                imageUrl="https://picsum.photos/700"
                title="nidaye"
                buttonPress={() => console.log('Pressed')}
              />
              <CustomCard
                imageUrl="https://picsum.photos/700"
                title="nidaye"
                buttonPress={() => console.log('Pressed')}
              />
            </View>

            <View style={styles.container1}>
              <CustomCard
                imageUrl="https://picsum.photos/700"
                title="nidaye"
                buttonPress={() => console.log('Pressed')}
              />
              <CustomCard
                imageUrl="https://picsum.photos/700"
                title="nidaye"
                buttonPress={() => console.log('Pressed')}
              />
            </View>

            <CardContainer
              imageUrl="https://picsum.photos/700"
              title="nidaye"
              onPress={() => console.log('Pressed')}
            />
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
  buttonCertificates: {
    fontSize: 30,
    textAlign: 'left',
  },
  textCard: {
    color: '#898A8D',
    alignItems: 'Right',
  },
  container1: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },

  child1: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#F2FDEA',
    color: '#898A8D',
  },
  textTitle: {
    color: '#23531E',
    marginTop: 40,
    marginBottom: 10,
    fontSize: 20,
    paddingHorizontal: 40,
  },

  textStyle: {
    color: '#23531E',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  CertificatesButton: {
    textAlign: 'center',
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
    height:52,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20, // 使头像保持圆形
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // 确保图片圆角
    marginLeft:20
  },
  userAvatar: {
    width: '100%',
    height: '100%', 
  },

  userText: {
    color:  COLORS.textGreen,
    fontSize: 16,
    marginLeft:20,
    fontWeight: 'bold'
    
  },
  UserLayout: {
    flexDirection: 'row', // 水平方向排列子组件
   
    marginVertical:30,
    
  },
  PointsText:{
    marginHorizontal: 60
  }
});
