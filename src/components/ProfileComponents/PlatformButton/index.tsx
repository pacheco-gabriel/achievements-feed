import React from 'react';

import {
  ColorValue,
  TouchableOpacityProps,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../../theme';

type Props = TouchableOpacityProps & {
  icon: string;
  color?: ColorValue;
}

export function PlatformButton({ icon, color = COLORS.WHITE,  ...rest }: Props){
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    {...rest}
    > 
      <FontAwesome5 name={icon} style={[styles.icon, { color }]} />
    </TouchableOpacity>
  );
}