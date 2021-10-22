import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

export function BackButton(){
  return (
    <TouchableOpacity>
      <Text style={styles.text}><FontAwesome5 name="arrow-left" /> Voltar</Text>
    </TouchableOpacity>
  );
}