import React from 'react';

import {
  View, Text, ScrollView
} from 'react-native';
import { Game } from '../../components/GameComponents/Game';

import { styles } from './styles';

export function Games(){
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot"/>
        <Game title="Dragon Ball Z: Kakarot" />
        <Game title="Dragon Ball Z: Kakarot"/>
      </ScrollView>
    </View>
  );
}
