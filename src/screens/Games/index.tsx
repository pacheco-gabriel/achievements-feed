import React from 'react';

import { View, Text }      from 'react-native';
import { GameList }  from '../../components/GameComponents/GameList';
import { FormInput } from '../../components/ProfileComponents/FormInput';

import { styles }   from './styles';

export function Games(){
  return (
    <View style={styles.container}>
      <View style={styles.formInput}>
      <Text style={styles.title}>Buscar por Jogos</Text>
        <FormInput title="" placeholder="Buscar..." />
      </View>
      <GameList />
    </View>
  );
}
