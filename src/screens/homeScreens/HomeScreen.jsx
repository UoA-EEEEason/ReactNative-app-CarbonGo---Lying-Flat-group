import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { FAB, Modal, Button, IconButton } from 'react-native-paper';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeight } from '../../redux/actions/weight';
import { fetchPoints } from '../../redux/actions/carbonFootprint';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [openGroup1, setOpenGroup1] = React.useState(false);
  const [openGroup2, setOpenGroup2] = React.useState(false);
  const [openGroup3, setOpenGroup3] = React.useState(false);

  const onStateChangeGroup1 = ({ open }) => setOpenGroup1(open);
  const onStateChangeGroup2 = ({ open }) => setOpenGroup2(open);
  const onStateChangeGroup3 = ({ open }) => setOpenGroup3(open);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  // fetch weight
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeight());
  }, [dispatch]);

  // get auth state from redux
  const uid = useSelector(state => state.auth.uid);

  // sync total points state
  useEffect(() => {
    dispatch(fetchPoints(uid));
  }, [dispatch]);

  //
  // const lastPoints = useSelector(state => state.carbonFootprint).points
  // console.log('lastPoints:', lastPoints)

  return (
    <ImageBackground
      source={require('./../../assets/images/backgroundblue.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={''} />

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <LottieView
            source={require("./../../assets/animations/cloudyAnimation.json")}
            autoPlay
            loop
            style={{
              width: '100%',
              height: '40%',

            }} />
          <LottieView
            source={require("./../../assets/animations/treeAnimation.json")}
            autoPlay
            loop
            speed={0.5}
            style={{
              width: '100%',
              height: 500,
              marginTop: '-10%',
            }} />
        </View>
        <FAB
          icon={({ size }) => (
            <View style={{
              width: size,
              height: size,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('./../../assets/images/user.png')}
                style={{
                  width: 40,
                  height: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 60,
                  resizeMode: 'contain'
                }}
              />
            </View>
          )}
          style={styles.fabuser}
          onPress={() => navigation.navigate('CertificatesOutlines')}
          mode='elevated'
          label='      user  '
          color='#23531E'
          animated={false}
        />
        <FAB
          icon="message-processing-outline"
          size='small'
          style={styles.fabnews}
          onPress={() => navigation.navigate('News')}
          mode='elevated'
          color='green'
        />
        <FAB.Group
          open={openGroup1}
          visible
          color='green'
          backdropColor='transparent'
          style={styles.fabCarbon}
          fabStyle={{
            backgroundColor: 'white',
            borderRadius: 60,
            height: 70,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={openGroup1 ? 'close' : 'foot-print'}
          actions={[
            {
              icon: 'walk',
              onPress: () => navigation.navigate('Walk'),
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
            {
              icon: 'bus-marker',
              onPress: () => navigation.navigate('Bus'),
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
            {
              icon: 'flash',
              onPress: () => navigation.navigate('Elec'),
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
            {
              icon: 'food',
              onPress: () => navigation.navigate('Food'),
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
          ]}
          onStateChange={onStateChangeGroup1}
          onPress={() => {
            if (openGroup1) {
              // do something if the speed dial is open
            }
          }}
        />
        <FAB.Group
          open={openGroup3}
          visible
          color='green'
          backdropColor='transparent'
          style={styles.fabAccount}
          label='Account'
          fabStyle={{
            backgroundColor: 'white',
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            position: 'absolute',
            bottom: '8%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            height: 70,
            width: 160,
          }}
          icon={openGroup3 ? 'account-circle-outline' : 'account-circle-outline'}
          actions={[
          ]}
          onStateChange={onStateChangeGroup3}
          onPress={() => navigation.navigate('Account')}
        />
        <FAB.Group
          open={openGroup2}
          visible
          color='green'
          backdropColor='transparent'
          style={styles.fabGroup}
          fabStyle={{
            backgroundColor: 'white',
            borderRadius: 60,
            height: 70,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={openGroup2 ? 'menu-open' : 'menu'}
          actions={[
            {
              icon: 'google-analytics',
              onPress: () => navigation.navigate('DataAnalysis'),
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
            {
              icon: 'email',
              onPress: () => navigation.navigate('About'),
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
            {
              icon: 'share',
              onPress: openModal,
              color: 'green',
              style: {
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                width: 55,
                backgroundColor: 'white',
              },
            },
          ]}
          onStateChange={onStateChangeGroup2}
          onPress={() => {
            if (openGroup2) {
              // do something if the speed dial is open
            }
          }}
        />
        <Modal visible={isModalVisible} onDismiss={closeModal}>
          <View style={styles.modal}>
            <IconButton
              icon="close-circle-outline"
              size={30}
              onPress={closeModal}
              style={styles.closeButton}
            />
            <Text style={styles.modalText}>Share to</Text>
            <Image source={require('./../../assets/images/news1.png')} style={styles.modalImage} />
            <View style={styles.iconButtonContainer}>
              <Button icon="facebook" style={styles.iconButton} mode="contained" onPress={() => console.log('Pressed')}>
                Facebook
              </Button>
              <Button icon="twitter" style={styles.iconButton} mode="contained" onPress={() => console.log('Pressed')}>
                Twitter
              </Button>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>

  );
};

export default HomeScreen;

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
  demoText: {
    fontSize: 30,
    color: COLORS.textGreen,
    textAlign: 'center',
  },
  fabuser: {
    backgroundColor: 'rgba(0, 177, 97, 0.3)',
    position: 'absolute',
    margin: 16,
    left: '0.1%',
    bottom: '82%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabnews: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    margin: 16,
    right: '0.1%',
    bottom: '83%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabCarbon: {
    position: 'absolute',
    marginRight: '73%',
    bottom: '5%',
  },
  fabAccount: {
    position: 'absolute',
    marginRight: '2%',
    bottom: '5%',
  },
  fabGroup: {
    position: 'absolute',
    marginRight: '2%',
    bottom: '5%',
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
    width: '36%',
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