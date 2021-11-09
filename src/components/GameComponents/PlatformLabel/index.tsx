import React from 'react';

import {
  View,Text,
} from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../../theme';
type Props = {
  platform: string;
}

export function PlatformLabel({ platform }: Props){
  let color = '';
  let title = '';

  switch (platform) {
    case 'playstation':
      color = COLORS.PLAYSTATION;
      title = 'PlayStation';
      break;
    case 'steam':
      color = COLORS.STEAM;
      title = 'STEAM';
      break;
    case 'xbox':
      color = COLORS.XBOX;
      title = 'XBOX';
      break;
  }

  return (
    <View style={[styles.boxLabel, {backgroundColor: color}]}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
}
