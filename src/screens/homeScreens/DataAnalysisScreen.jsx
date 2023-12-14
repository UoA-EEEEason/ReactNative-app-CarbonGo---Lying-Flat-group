import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/color/color';
import {StatusComponent} from '../../components';
import {hp, wp} from '../../utils/dimensions';
import {Card} from 'react-native-paper';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryBar,
} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];

const DataAnalysisScreen = () => {
  const [animateToNumber, setAnimateToNumber] = useState(7979);

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <StatusComponent title={'Data Analysis'} />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.numberFrame}>
              <Text style={styles.counterText}>Cumulative emission reductions</Text>
              <Text style={styles.number}>543210 g</Text>
            </View>
            <View style={styles.whitebackground}>
              <Text style={styles.title}>Emission reduction details</Text>
              <VictoryChart width={wp(90)} height={wp(70)}>
                <VictoryLine
                  data={[
                    {x: 1, y: 2},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 6},
                  ]}
                />
              </VictoryChart>
              <Text style={styles.title}>Emission reduction proportion</Text>
              <VictoryChart
                domainPadding={{x: 10}}
                width={wp(90)}
                height={wp(70)}>
                <VictoryBar
                  horizontal
                  style={{
                    data: {fill: COLORS.green},
                  }}
                  data={[
                    {x: 1, y: 2},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 6},
                  ]}
                />
              </VictoryChart>
              <Text style={styles.title}>Emission reduction trends</Text>
              <Text style={styles.text}>
                trends text. trends text. trends text. trends text. trends text.
                trends text. trends text. trends text. trends text. trends text.
                trends text.
              </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
  whitebackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: wp(95),
    backgroundColor: COLORS.white,
    paddingTop: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    paddingTop: 10,
    marginLeft: 15,
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    color: COLORS.black,
    paddingTop: 10,
    paddingBottom: 30,
    marginLeft: 15,
    textAlign: 'left',
  },
  numberFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: wp(95),
    backgroundColor: COLORS.lightBackground,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  counterText: {
    fontSize: 16,
    color: COLORS.backgroudGreen,
  },
  number: {
    fontSize: 38,
    fontWeight: 'bold',
    color: COLORS.backgroudGreen,
  },
});
