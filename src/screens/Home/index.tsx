import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';
import { Game } from '../../components/Game';

import { styles } from './styles';

export function Home(){
  return (
    <View style={styles.container}>
      <Header />
      <Game />
    </View>
  );
}
