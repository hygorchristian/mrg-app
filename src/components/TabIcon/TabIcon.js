import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export default class TabIcon extends Component {
  render() {
    const { name, tintColor, style, solid = false, type } = this.props;

    switch (type) {
      case 'feather':
        return (
          <FeatherIcon
            style={style ? style : {}}
            name={name}
            size={24}
            color={tintColor}
          />
        );
      case 'fa':
        return (
          <FaIcon
            style={style ? style : {}}
            name={name}
            size={20}
            color={tintColor}
            solid={solid}
          />
        );
      case 'material':
        return (
          <Icon
            style={style ? style : {}}
            name={name}
            size={24}
            color={tintColor}
          />
        );
      case 'entypo':
        return (
          <EntypoIcon
            style={style ? style : {}}
            name={name}
            size={24}
            color={tintColor}
          />
        );
      case 'rounded':
        return (
          <View style={styles.rounded}>
            <Icon
              style={style ? style : {}}
              name={name}
              size={24}
              color="#27998f"
            />
          </View>
        );
    }
  }
}
