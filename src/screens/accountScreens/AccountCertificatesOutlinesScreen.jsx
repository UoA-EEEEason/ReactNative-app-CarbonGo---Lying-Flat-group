import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  Icon,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from './../../constants/color/color';
import {StatusComponent, ButtonComponent} from './../../components';
import {Button, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CertificatesCard = ({imageUrl, title, buttonPress}) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.child1}>
      <Card.Cover source={{uri: imageUrl}} />
      <Text style={styles.textStyle}>{title}</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('CertificatesDetails')}>
        <Text style={styles.buttonText}>More details</Text>
      </Button>
    </Card>
  );
};

// CertificatesContainer
const CertificatesContainer = ({imageUrl, title, onPress}) => {
  return (
    <View style={styles.container1}>
      <CertificatesCard
        imageUrl={imageUrl}
        title={title}
        buttonPress={onPress}
      />
      <CertificatesCard
        imageUrl={imageUrl}
        title={title}
        buttonPress={onPress}
      />
    </View>
  );
};

const AccountCertificatesOutlinesScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'Certificates'} />
        <ScrollView>
          <View>
            <CertificatesContainer></CertificatesContainer>
            <CertificatesContainer></CertificatesContainer>
            <CertificatesContainer></CertificatesContainer>
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
});
