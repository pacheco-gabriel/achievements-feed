import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { NavBar } from '../../components/NavBar';

import { styles } from './styles';

export function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste</Text>
      <NavBar />
    </View>
  );
}