
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

type PropsButton = {
  screenName: any
}

function GoToGame({ screenName }:PropsButton) {
  const navigation = useNavigation();

  return (
    <Button 
      title="VER GAME"
      color={COLORS.WHITE} 
      onPress={() => {  navigation.navigate(screenName); }} 
      backgroundColor={COLORS.PINK} 
      customStyles={styles.mainButton}/>
  );
}

export function GameTitle({title, button = true}: Props){
  
  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>{title}</Text>
      {
        button &&
        <GoToGame screenName="Game" />
      }
    </View>
  );
}
