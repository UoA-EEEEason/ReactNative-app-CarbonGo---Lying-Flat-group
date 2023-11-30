import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const actualScreenHeight = Dimensions.get('window').height;
export const actualScreenWidth: number = Dimensions.get('window').width;

const IOSStatusBarHeight = 25;

export const statusBarHeight =
  Platform.OS === 'android' ? StatusBar.currentHeight || 0 : IOSStatusBarHeight;

export const screenHeight: number = actualScreenHeight - statusBarHeight;

export const hp = (num: number) => {
  return PixelRatio.roundToNearestPixel((num * actualScreenHeight) / 100);
};

export const wp = (num: number) => {
  return PixelRatio.roundToNearestPixel((num * actualScreenWidth) / 100);
};
