import { Platform } from 'react-native';

export const BOLD = Platform.select({
  ios: 'Open Sans',
  android: 'OpenSans_Bold',
});
export const EXTRABOLD = Platform.select({
  ios: 'Open Sans',
  android: 'OpenSans_ExtraBold',
});

export const LIGHT = Platform.select({
  ios: 'Open Sans',
  android: 'OpenSans_Light',
});

export const SEMIBOLD = Platform.select({
  ios: 'Open Sans',
  android: 'OpenSans_SemiBold',
});

export const REGULAR = Platform.select({
  ios: 'Open Sans',
  android: 'OpenSans_Regular',
});
