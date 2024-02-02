import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from './../utils/dimensions';
import {COLORS} from './../constants/color/color';

const PointsComponent = ({points}) => {
  return (
    <View style={styles.numberFrame}>
      <Text style={styles.counterText}>Points you will earn</Text>
      <Text style={styles.number}>
        {points}
      </Text>
    </View>
  );
};

export default PointsComponent;

const styles = StyleSheet.create({
    numberFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(80),
        height: wp(40),
        backgroundColor: COLORS.lightBackground,
        padding: 10,
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
