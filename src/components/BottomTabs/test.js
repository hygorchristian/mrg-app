/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import BottomTabs from './BottomTabs';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<BottomTabs />);
});
