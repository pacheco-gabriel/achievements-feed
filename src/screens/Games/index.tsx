import React from 'react';

import {
  View, Text, ScrollView
} from 'react-native';
import { GameList } from '../../components/GameComponents/GameList';

import { styles } from './styles';

export function Games(){
  return (
    <View style={styles.container}>
      <GameList />
    </View>
  );
}
