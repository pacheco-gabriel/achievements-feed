import React from 'react';

import {
  Text,
  View
} from 'react-native';

import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export function NavBar(){
  return (
    <View style={styles.container}>
      <Text style={styles.itemMenu}><FontAwesome5 name="home" style={styles.icon} /></Text>
      <Text style={styles.itemMenu}><FontAwesome5 name="gamepad" style={styles.icon} /></Text>
      <Text style={styles.itemMenu}><FontAwesome5 name="search" style={styles.icon} /></Text>
      <Text style={styles.itemMenu}><FontAwesome5 name="user-cog" style={styles.icon} /></Text>
    </View>
  );
}