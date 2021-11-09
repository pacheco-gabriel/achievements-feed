import React from 'react';

import {
  View,Text,
} from 'react-native';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  quantity: number;
}

export function TrophyLabel({ quantity }: Props){
  return (
    <View style={styles.container}>
      <FontAwesome5  style={styles.textTrophy} name="trophy"/>
      <Text style={styles.textTrophy}>
        {quantity}
      </Text>
    </View>
  );
}
