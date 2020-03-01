import { Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BOTTOM_SPACE = getBottomSpace();
