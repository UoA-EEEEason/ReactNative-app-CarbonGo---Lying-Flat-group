import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hp} from '../utils/dimensions';
import { AntDesignIcon} from './../constants/icons/icons';
import {
  decreaseNumber,
  increaseNumber,
} from '../redux/actions/testNumberAction';

const TestComponent = () => {
  const dispatch = useDispatch(); 
  const displayNumber = useSelector(state => state.test.number);

  const handleIncrement = async () => {
    dispatch(increaseNumber());
  };

  const handleDecrement = async () => {
    dispatch(decreaseNumber());
  };

  return (
    <View>

      <Text style={styles.title}>
        XINYA
      </Text>

      <View style={styles.count}>
        {/* DECREMENT */}
        <TouchableOpacity onPress={handleDecrement} style={styles.circle}>
          <AntDesignIcon name="minus" size={35} color={'black'} />
        </TouchableOpacity>

        {/* NUMBER VALUE */}

        <View style={styles.numBox}>
          <Text style={{fontSize: 35, color: 'black'}}>{displayNumber}</Text>
        </View>

        {/* INCREMENT */}
        <TouchableOpacity onPress={handleIncrement} style={styles.circle}>
          <AntDesignIcon name="plus" size={35} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TestComponent;

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Nunito-Italic',
  },

  circle: {
    height: hp(7),
    width: hp(7),
    borderRadius: 1000,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numBox: {
    height: hp(7),
    width: hp(12),
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  }
});
