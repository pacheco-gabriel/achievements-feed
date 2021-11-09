import React from 'react';

import {Text, View} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

export function TrophyProgress(){
  return (
    <View style={styles.container}>
      <FontAwesome5 style={styles.iconTrophy} name='trophy' />
      <View>
        <Text style={styles.textAchievements}>19/42 conquistas</Text>
        <View style={styles.progress}>
          <View style={styles.progressBar}></View>
        </View>
      </View>
    </View>
  );
}