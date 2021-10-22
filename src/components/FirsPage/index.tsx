import React from 'react';

import {
  ImageBackground,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function FirsPage(){
  return (
    <ImageBackground 
      source={require('../../assets/bg-form.png')} 
      resizeMode="cover" 
      style={styles.image}>
      <View style={styles.container}>
        <Button
        title="entrar"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        />
        <Button
        title="cadastrar"
        color={COLORS.WHITE}
        borderColor={COLORS.WHITE}
        backgroundColor={COLORS.TRANSPARENT}
        />
      </View>
    </ImageBackground>
  );
}