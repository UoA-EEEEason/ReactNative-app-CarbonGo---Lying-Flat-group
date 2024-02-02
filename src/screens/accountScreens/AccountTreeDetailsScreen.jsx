import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { hp, wp } from './../../utils/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { postCertificate } from '../../redux/actions/certificate';
import firestore from '@react-native-firebase/firestore';
import { postPoints } from '../../redux/actions/carbonFootprint';
import { useNavigation } from '@react-navigation/native';
import { Modal, Button, IconButton } from 'react-native-paper';

const AccountTreeDetailsScreen = ({ route }) => {
  const { item } = route.params;
  // console.log('item:',item)

  const navigation = useNavigation();
  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);

  // get auth state from redux
  const uid = useSelector(state => state.auth.uid);

  // fetch last total points
  const currentPoints = useSelector(state => state.carbonFootprint).points;
  const newPoints = currentPoints - item.price;
  const diffPoints = -item.price;

  const dispatch = useDispatch();

  const handleSubmitPress = async () => {
    const createdAt = firestore.Timestamp.now();
    const cimage = [];
    const certifacateCover = 'https://s2.loli.net/2023/12/19/Be8nwbsxvWVZAgl.jpg';
    cimage.push(certifacateCover);
    cimage.push(item.image);
    // console.log(cimage);
    // get a certifacte
    dispatch(postCertificate(uid, item.id, createdAt, cimage, item.desc));
    // Deduct corresponding points
    dispatch(postPoints(uid, newPoints, createdAt, 'get a tree', diffPoints));
    // console.log('get it')
    // navigation.navigate('Home')
    setIsModalVisible(true);
  };

  const handleModalButton = () => {
    navigation.navigate('CertificatesOutlines')
  }

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={'Tree Details'} />
        <ScrollView>
          <View>
            <View>
              <Image
                source={{ uri: item.image }}
                style={styles.pictureStyle}></Image>
            </View>
            <View>
              <View style={styles.ContextContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <View>
                  <Text style={styles.description}>
                    {item.desc}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleSubmitPress}
                >
                  <Text style={styles.buttonText}>{item.price} Points Get It!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Modal visible={isModalVisible} onDismiss={closeModal}>
            <View style={styles.modal}>
              <IconButton
                icon="close-circle-outline"
                size={30}
                onPress={closeModal}
                style={styles.closeButton}
              />
              <Text style={styles.modalText}>Congratuation! 🎉</Text>
              <Image source={require('./../../assets/images/news1.png')} style={styles.modalImage} />
              <View style={styles.iconButtonContainer}>
                <Button style={styles.iconButton} mode="contained" onPress={handleModalButton}>
                  Check Certificate
                </Button>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountTreeDetailsScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  pictureStyle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp(90),
    height: hp(40),
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 20,
    marginHorizontal: 20
  },
  ContextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#D9F3D9',
    borderRadius: 20,
    marginTop: 20,
    width: wp(90),
  },
  title: {
    fontSize: 32,
    color: COLORS.textGreen,
    fontWeight: 'bold',
    paddingTop: 30,
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: COLORS.textGreen,
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
  loginButton: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: COLORS.buttonGreen,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
  modal: {
    backgroundColor: '#D9F3D9',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    height: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: COLORS.darkGrey,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalImage: {
    width: '80%',
    height: '65%',
    marginBottom: 20,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  iconButton: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: COLORS.buttonGreen,
  },
  iconButtonText: {
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 15,
  },
});
