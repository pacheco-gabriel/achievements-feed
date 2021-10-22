import React from 'react';

import {
  View
} from 'react-native';
import { HeaderLogin } from '../../components/HeaderLogin';

import { styles } from './styles';

export function Login(){
  return (
    <View style={styles.container}>
      <HeaderLogin />
    </View>
  );
}