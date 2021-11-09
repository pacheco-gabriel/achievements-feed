import React from 'react';

import {Text, View} from 'react-native';

import { styles } from './styles';

import { Header }         from '../../components/Header';
import { TrophyProgress } from '../../components/GameComponents/TrophyProgress';
import { CircleProgress } from '../../components/GameComponents/CircleProgress';

export function Game(){
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.screen}>
        <View style={styles.containerTrophy}>
          <TrophyProgress />
          <Text style={styles.title}>Existem 6 conquistas ocultas restantes</Text>
          <Text style={styles.subTitle}>Os detalhes de cada conquista serão revelados após alcançadas</Text>
        </View>
        
          <CircleProgress />
        </View>
      
    </View>
  );
}
