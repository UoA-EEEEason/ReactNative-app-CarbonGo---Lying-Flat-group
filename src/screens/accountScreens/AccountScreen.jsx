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
} from 'react-native';
import React from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent, ButtonComponent} from './../../components';
import {Button, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CustomCard = ({imageUrl, title, buttonPress}) => {
  return (
    <Card style={styles.child1}>
      <Card.Cover source={{uri: imageUrl}} />
      <Text style={styles.textStyle}>{title}</Text>
      <Button icon={<Icon name="Buy" color="#ffffff" />} onPress={buttonPress}>
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
              <ButtonComponent title = "User"></ButtonComponent>
              <Card.Title
                style={styles.textCard}
                title="My carbon foot"
                subtitle="30 points"></Card.Title>

              <Button onPress={() => console.log('Pressed')}>
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
  CertificatesButton:{
    textAlign: 'center',
  }
});
