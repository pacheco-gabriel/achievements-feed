import React from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

import { styles } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

type Props = TouchableOpacityProps;

export function BackButton({...rest }: Props){
  return (
    <TouchableOpacity 
    {...rest}>
      <Text style={styles.text}><FontAwesome5 name="arrow-left" /> Voltar</Text>
    </TouchableOpacity>
  );
}