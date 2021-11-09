import React from 'react';

import {View} from 'react-native';

import { styles } from './styles';

import { Header }         from '../../components/Header';
import { TrophyProgress } from '../../components/GameComponents/TrophyProgress';

export function Game(){
  return (
    <View style={styles.container}>
      <Header />
      <TrophyProgress />
    </View>
  );
}
