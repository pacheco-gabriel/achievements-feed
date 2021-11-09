import React from 'react';

import {View, Text} from 'react-native';

import { styles } from './styles';

export function CircleProgress(){
  return (
    <View style={styles.container}>
      <View style={styles.circleProgressBar}>
        <View style={styles.circleProgress}>
          <Text style={styles.textProgress}>50%</Text>
        </View>
      </View>
    </View>
  );
}