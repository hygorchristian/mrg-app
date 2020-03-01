import { Platform } from 'react-native';

export const BOLD = Platform.select({
  ios: 'Montserrat-Bold',
  android: 'Montserrat_Bold',
});

export const BLACK = Platform.select({
  ios: 'Montserrat-Black',
  android: 'Montserrat_Black',
});

export const EXTRABOLD = Platform.select({
  ios: 'Montserrat-ExtraBold',
  android: 'Montserrat_ExtraBold',
});

export const EXTRALIGHT = Platform.select({
  ios: 'Montserrat-ExtraLight',
  android: 'Montserrat_ExtraLight',
});

export const LIGHT = Platform.select({
  ios: 'Montserrat-Light',
  android: 'Montserrat_Light',
});

export const SEMIBOLD = Platform.select({
  ios: 'Montserrat-SemiBold',
  android: 'Montserrat_SemiBold',
});

export const REGULAR = Platform.select({
  ios: 'Montserrat',
  android: 'Montserrat_Regular',
});
