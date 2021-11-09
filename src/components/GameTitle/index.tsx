import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { Button } from '../../components/Button';
import { styles } from './styles';
type Props = {
  title: string,
  button?: boolean
};
import { COLORS } from '../../theme';

export function GameTitle({title, button = true}: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>{title}</Text>
      {
        button &&
        <Button title="VER GAME" color={COLORS.WHITE}  backgroundColor={COLORS.PINK} onPress="" customStyles={styles.mainButton}/>
      }
    </View>
  );
}
