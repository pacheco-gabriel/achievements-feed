import React from 'react';

import {
  Text,
  View
} from 'react-native';


import { Game } from '../../components/GameComponents/Game';

import { styles } from './styles';

export function Favorites(){
  return (
    <View style={styles.container}>
      <Game title="Dragon Ball Z: Kakarot"/>
    </View>
  );
}
