import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { COLORS } from './../../constants/color/color';
import { StatusComponent } from './../../components';
import { FAB, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [openGroup1, setOpenGroup1] = React.useState(false);
  const [openGroup2, setOpenGroup2] = React.useState(false);
  const [openGroup3, setOpenGroup3] = React.useState(false);

  const onStateChangeGroup1 = ({ open }) => setOpenGroup1(open);
  const onStateChangeGroup2 = ({ open }) => setOpenGroup2(open);
  const onStateChangeGroup3 = ({ open }) => setOpenGroup3(open);

  return (
    <ImageBackground
      source={require('./../../assets/images/backgroundtree.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusComponent title={''} />

        <ScrollView>
          <View>
            <Text></Text>
          </View>
        </ScrollView>
        <FAB
          icon={({ size, color }) => (
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
          onPress={() => console.log('Pressed')}
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
              onPress: () => console.log('Pressed walk'),
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
              onPress: () => console.log('Pressed bus'),
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
              onPress: () => console.log('Pressed electricity'),
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
              onPress: () => console.log('Pressed food'),
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
          onPress={() => navigation.navigate('News')}
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
              onPress: () => console.log('Data analysis'),
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
              onPress: () => console.log('About us'),
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
              onPress: () => console.log('Share app'),
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
    backgroundColor: 'rgba(0, 177, 97, 0.5)',
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
    bottom: '8%',
  },
  fabAccount: {
    position: 'absolute',
    marginRight: '2%',
    bottom: '8%',
  },
  fabGroup: {
    position: 'absolute',
    marginRight: '2%',
    bottom: '8%',
  },
});