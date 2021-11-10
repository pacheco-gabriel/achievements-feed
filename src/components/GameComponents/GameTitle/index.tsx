// @ts-nocheck

import React from 'react';

import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../../Button';

import { styles } from './styles';

type Props = {
  title: string,
  button?: boolean
};
import { COLORS } from '../../../theme';

import { Game } from '../../../screens/Game';

export function GameTitle({title, button = true}: Props){
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>{title}</Text>
      {
        button &&
        <Button title="VER GAME" color={COLORS.WHITE} onPress={() => {  navigation.navigate(Game); }} backgroundColor={COLORS.PINK} customStyles={styles.mainButton}/>
      }
    </View>
  );
}
