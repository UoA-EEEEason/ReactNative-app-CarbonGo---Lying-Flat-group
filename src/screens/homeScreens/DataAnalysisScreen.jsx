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
import React, { useState, useEffect } from 'react';
import { COLORS } from '../../constants/color/color';
import { StatusComponent } from '../../components';
import { hp, wp } from '../../utils/dimensions';
import { Card, Icon, ProgressBar, MD3Colors } from 'react-native-paper';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryBar,
} from 'victory-native';
import * as Progress from 'react-native-progress';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const DataAnalysisScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 1) {
          clearInterval(interval);
          return 1;
        }
        return Math.min(oldProgress + 0.01, 0.3);
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={require('./../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={{ flex: 1 }}>
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
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 },
                  ]}
                  animate={{ duration: 2000, onLoad: {duration: 5000}}}
                />
              </VictoryChart>
              <Text style={styles.title}>Emission reduction proportion</Text>
              <View style={styles.prograssContainer}>
                <View style={styles.progressBar}>
                  <Icon source="walk" size={30}></Icon>
                  <Progress.Bar progress={progress} width={200} color="green" marginLeft={10}/>
                  <Text style={{ marginRight: 10 }}>   {Math.round(progress * 100)}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <Icon source="bus-marker" size={30}></Icon>
                  <Progress.Bar progress={progress} width={200} color="green" marginLeft={10}/>
                  <Text style={{ marginRight: 10 }}>   {Math.round(progress * 100)}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <Icon source="food" size={30}></Icon>
                  <Progress.Bar progress={progress} width={200} color="green" marginLeft={10}/>
                  <Text style={{ marginRight: 10 }}>   {Math.round(progress * 100)}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <Icon source="flash" size={30}></Icon>
                  <Progress.Bar progress={progress} width={200} color="green" marginLeft={10}/>
                  <Text style={{ marginRight: 10 }}>   {Math.round(progress * 100)}%</Text>
                </View>
              </View>
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
  prograssContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: 20,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 10,
  },
});