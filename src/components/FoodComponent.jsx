import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {hp, wp} from './../utils/dimensions';
import {COLORS} from './../constants/color/color';

const FoodComponent = ({id, weight, image, onUpdateTotalValue}) => {
  const [item, setItem] = useState({number: 0});

  useEffect(() => {
    onUpdateTotalValue(id, weight * item.number);
}, [item.number]);


  const handleButtonChange = (type, delta) => {
    setItem(prevItems => ({
      ...prevItems,
      [type]: Math.max(0, prevItems[type] + delta),
    }));
  };

  const handleKeyboardChange = (type, value) => {
    if (value === '') {
      // set 0 when input is string
      setItem(prevItems => ({
        ...prevItems,
        [type]: 0,
      }));
    } else {
      // make sure value is a number
      const newValue = parseInt(value, 10);
      if (!isNaN(newValue)) {
        setItem(prevItems => ({
          ...prevItems,
          [type]: Math.max(0, newValue),
        }));
      }
    }
  };

  // Custom function to truncate the number with ellipsis if more than 3 digits
  const formatNumber = number => {
    const numberString = String(number);
    return numberString.length > 3
      ? `${numberString.slice(0, 3)}...`
      : numberString;
  };

  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.points}>{Number(weight) * item.number}</Text>
      </View>
      <View style={styles.numButtons}>
        <View style={styles.decrementSymbol}>
          <TouchableOpacity onPress={() => handleButtonChange('number', -1)}>
            <Text style={styles.guestButton}>-</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.itemInput}
          keyboardType="numeric"
          value={formatNumber(item.number)}
          onChangeText={text => handleKeyboardChange('number', text)}
        />
        <View style={styles.incrementSymbol}>
          <TouchableOpacity onPress={() => handleButtonChange('number', 1)}>
            <Text style={styles.guestButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodComponent;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.buttonGreen,
    height: hp(10),
    width: wp(80),
    borderRadius: 9.58,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 30,
  },
  details: {
    flex: 1,
  },
  points: {
    fontSize: 15,
    color: COLORS.black,
  },
  price: {
    fontSize: 14,
    color: COLORS.darkGrey,
  },
  numButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.mediumGrey,
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  decrementSymbol: {
    backgroundColor: COLORS.lightPink,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
  },
  incrementSymbol: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
  },
  guestButton: {
    fontSize: 20,
    marginHorizontal: 10,
    width: 30,
    textAlign: 'center',
  },
  itemInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    width: 60, 
    overflow: 'hidden',
  },
});
