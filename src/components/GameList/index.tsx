import React from 'react';

import {
  View,
  ScrollView,
  Text
} from 'react-native';
import { Game } from '../../components/Game';
import { styles } from './styles';
type Props = {
  title?: string;
};

export function GameList({title = ''}: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
      </ScrollView>
    </View>
  );
}
