import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS } from '../../constants/color/color';
import { StatusComponent } from '../../components';
import { hp, wp } from '../../utils/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPoints,
  fetchWalk,
  fetchTraffic,
  fetchElectricity,
  fetchFood,
  fetchAndStoreMonthData,
} from '../../redux/actions/carbonFootprint';
import { Icon } from 'react-native-paper';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from 'victory-native';
import * as Progress from 'react-native-progress';

function getMonthAbbreviation(timestampObj) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (timestampObj && typeof timestampObj.seconds === 'number') {
    // Convert Firestore timestamp to JavaScript Date object
    const date = new Date(timestampObj.seconds * 1000);
    return months[date.getMonth()];
  } else {
    // If timestampObj is not in the expected format, you can return a default value or throw an error
    return 'N/A';
  }
}

const DataAnalysisScreen = () => {

  const uid = useSelector(state => state.auth.uid);
  const [animateChart, setAnimateChart] = useState(false);

  // get emission detail
  useEffect(() => {
    if (uid) {
      dispatch(fetchAndStoreMonthData(uid));
    }
  }, [uid, dispatch]);
  const results = useSelector(state => state.carbonFootprint).monthData ?? [];

  // Convert results array
  const transformedData = results.map(item => {
    // If createdAt is null, returns the default month
    const month = item.createdAt ? getMonthAbbreviation(item.createdAt) : 'N/A';

    // If points is null, set it to 0
    const points = item.points != null ? item.points : 0;

    return { x: month, y: points };
  });
  // console.log('transformedData:', transformedData)

  const dispatch = useDispatch();
  useEffect(() => {
    setAnimateChart(true);
    dispatch(fetchPoints(uid));
    dispatch(fetchWalk(uid));
    dispatch(fetchTraffic(uid));
    dispatch(fetchElectricity(uid));
    dispatch(fetchFood(uid));
  }, [dispatch]);

  const walkPoints = useSelector(state => state.carbonFootprint).walkConsumption ?? 0;
  const trafficPoints = useSelector(state => state.carbonFootprint).trafficConsumption ?? 0;
  const electricityPoints = useSelector(state => state.carbonFootprint).electricityConsumption ?? 0;
  const foodPoints = useSelector(state => state.carbonFootprint).foodConsumption ?? 0;
  const weight = useSelector(state => state.weight).weight;
  const walkEmissions = walkPoints * (weight.emissionWalk ?? 0);
  const trafficEmissions = trafficPoints * (weight.emissionTraffic ?? 0);
  const electricityEmissions = electricityPoints * (weight.emissionElec ?? 0);
  const foodEmissions = foodPoints * (weight.emissionFood ?? 0);
  const emissions = walkEmissions + trafficEmissions + electricityEmissions + foodEmissions;
  const denominator = emissions === 0 ? 1 : emissions;

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress(oldProgress => {
        const newProgress = oldProgress + 0.05;
        if (newProgress >= 1) {
          clearInterval(interval);
          return 1;
        }
        return newProgress;
      });
    }, 5);
    return () => clearInterval(interval);
  }, []);

  const getEmissionMaxText = () => {
    const maxPoints = Math.max(walkEmissions, trafficEmissions, electricityEmissions, foodEmissions);

    switch (maxPoints) {
      case walkEmissions:
        return "Well done! \nYou've done a remarkable job in significantly reducing carbon emissions through frequent walking. Your commitment and actions towards environmental conservation are truly commendable. Thank you for your valuable contribution to preserving the world's natural resources and environment.";
      case trafficEmissions:
        return "It's important to consider that your current transportation consumption may be contributing to a rise in carbon emissions.\n\nTo address this, you might want to:\n\n1. Explore alternatives, such as embracing a more plant-based diet or choosing locally sourced foods.\n2. small lifestyle changes like opting for public transportation or walking instead of driving.\n3. Reducing electricity usage in your home can collectively have a significant impact on your carbon footprint. \n\nThese mindful practices, when adopted widely, can greatly aid in our global effort to combat climate change and preserve the environment.";
      case electricityEmissions:
        return "It appears that the electricity usage you are making may be contributing to higher carbon emissions. \n\nTo further reduce your carbon footprint, you could improve your actions by:\n\n1. Consider alternative transportation methods like walking or using public buses instead of driving. \n2. Being mindful of your electricity usage can have a significant impact. \n3. Along with thoughtful food choices. Taking more vegetables and fruits could be a good choice.\n\nRemember, every small change contributes to a larger impact in our fight against climate change.";
      case foodEmissions:
        return "It appears that the food choices you are making may be contributing to higher carbon emissions. \n\nTo further reduce your carbon footprint, you could improve your actions by:\n\n1. Consider alternative transportation methods like walking or using public buses instead of driving. \n2. Being mindful of your electricity usage can have a significant impact. \n3. Along with thoughtful food choices, we can collectively make a substantial difference in reducing carbon emissions and aiding environmental conservation efforts. \n\nRemember, every small change contributes to a larger impact in our fight against climate change.";
      default:
        return "Balanced reduction across all sectors.";
    }
  };

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
              <Text style={styles.counterText}>
                Cumulative emission reductions
              </Text>
              <Text style={styles.number}>
                {denominator > 1000 ? `${(denominator / 1000).toFixed(2)} kg` : `${denominator} g`}
              </Text>
            </View>

            <View style={styles.whitebackground}>



              <Text style={styles.title}>Emission reduction details</Text>
              <VictoryChart width={wp(90)} height={wp(70)}>
                <VictoryAxis
                  style={{
                    axis: { stroke: COLORS.buttonGreen, strokeWidth: 2 },
                    tickLabels: { fill: COLORS.buttonGreen },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(tick) => `${Math.round(tick / 1000)}k`}
                  tickValues={[0, 5000, 10000, 15000, 20000, 25000]}
                  style={{
                    axis: { stroke: COLORS.buttonGreen, strokeWidth: 2 },
                    tickLabels: { fill: COLORS.buttonGreen },
                  }}
                />
                <VictoryLine
                  data={transformedData}
                  animate={animateChart ? { duration: 2000, onLoad: { duration: 5000 } } : undefined}
                  style={{ data: { stroke: COLORS.green, strokeWidth: 4 } }}
                />
              </VictoryChart>
              <Text style={styles.title}>Emission reduction proportion</Text>

              <View style={styles.prograssContainer}>
                <View style={styles.progressBar}>
                  <Icon source="walk" size={30}></Icon>
                  <Progress.Bar
                    progress={Math.min(animatedProgress, walkEmissions / denominator)}
                    width={200}
                    color="green"
                    marginLeft={10}
                  />
                  <Text style={{ marginRight: 10, color: COLORS.black }}>
                    {'   '}
                    {Math.round(walkEmissions / denominator * 100)}%
                  </Text>
                </View>

                <View style={styles.progressBar}>
                  <Icon source="bus-marker" size={30}></Icon>
                  <Progress.Bar
                    progress={Math.min(animatedProgress, trafficEmissions / denominator)}
                    width={200}
                    color="green"
                    marginLeft={10}
                  />
                  <Text style={{ marginRight: 10, color: COLORS.black }}>
                    {'   '}
                    {Math.round(trafficEmissions / denominator * 100)}%
                  </Text>
                </View>

                <View style={styles.progressBar}>
                  <Icon source="food" size={30}></Icon>
                  <Progress.Bar
                    progress={Math.min(animatedProgress, foodEmissions / denominator)}
                    width={200}
                    color="green"
                    marginLeft={10}
                  />
                  <Text style={{ marginRight: 10, color: COLORS.black }}>
                    {'   '}
                    {Math.round(foodEmissions / denominator * 100)}%
                  </Text>
                </View>

                <View style={styles.progressBar}>
                  <Icon source="flash" size={30}></Icon>
                  <Progress.Bar
                    progress={Math.min(animatedProgress, electricityEmissions / denominator)}
                    width={200}
                    color="green"
                    marginLeft={10}
                  />
                  <Text style={{ marginRight: 10, color: COLORS.black }}>
                    {'   '}
                    {Math.round(electricityEmissions / denominator * 100)}%
                  </Text>
                </View>
              </View>
              <Text style={styles.title}>Emission reduction trends</Text>
              <Text style={styles.text}>
                {getEmissionMaxText()}
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
    fontSize: 18,
    color: COLORS.black,
    paddingTop: 10,
    marginLeft: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: COLORS.black,
    paddingTop: 10,
    paddingBottom: 30,
    marginLeft: 15,
    width: '90%',
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
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
});
