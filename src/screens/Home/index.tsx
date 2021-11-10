import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { GameList } from '../../components/GameComponents/GameList';
import { Game} from '../Game';


import { styles } from './styles';


export function Home(){
  return (
    <View style={styles.container}>
      <GameList title="Jogos recentes" />
    </View>
  );
}
