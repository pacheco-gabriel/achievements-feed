import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { PlatformButton } from '../../ProfileComponents/PlatformButton';
import { COLORS } from '../../../theme';

export function PlatformList(){
  return (
    <View style={styles.iconList}>
      <PlatformButton icon="playstation" />
      <PlatformButton icon="xbox" />
      <PlatformButton icon="steam" />
    </View>
  );
}