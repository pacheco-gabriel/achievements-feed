import React from 'react';

import {Text, View, ScrollView} from 'react-native';

import { styles } from './styles';

import { Header }         from '../../components/Header';
import { TrophyProgress } from '../../components/GameComponents/TrophyProgress';
import { CircleProgress } from '../../components/GameComponents/CircleProgress';
import { Game as GameHeader } from '../../components/GameComponents/Game';

export function GameDetail(){
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerGame}>
          <GameHeader title="Dragon Ball Z: Kakarot" button={false} />
        </View>
        <View style={styles.screen}>
          <View style={styles.containerTrophy}>
            <TrophyProgress />
            <Text style={styles.title}>Existem 6 conquistas ocultas restantes</Text>
            <Text style={styles.subTitle}>Os detalhes de cada conquista serão revelados após alcançadas</Text>
          </View>
          
            <CircleProgress />
        </View>
      </ScrollView>
      
    </View>
  );
}
