import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export function PlatformList(){
  return (
    <View style={styles.iconList}>
      <FontAwesome5 name="playstation" style={styles.icon} />
      <FontAwesome5 name="xbox" style={styles.icon} />
      <FontAwesome5 name="steam" style={styles.icon} />
    </View>
  );
}