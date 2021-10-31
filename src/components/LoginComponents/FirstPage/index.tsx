import { MotiView } from '@motify/components';
import React from 'react';

import {
  ImageBackground,
  View
} from 'react-native';
import { COLORS } from '../../../theme';
import { Button } from '../../Button';
import { HeaderLogin } from '../HeaderLogin';

import { styles } from './styles';

export function FirstPage(){
  return (
    
    <MotiView 
    from={{ opacity: 0, translateY: -50 }}
    animate={{ opacity: 1, translateY: 0}}
    transition={{type: 'timing', duration: 700}}
    style={styles.container}
    >
      <HeaderLogin />
      <ImageBackground 
        source={require('../../../assets/bg-form-first.png')} 
        resizeMode="cover" 
        style={styles.image}>
        <View style={styles.containerFirsPage}>
          <Button
          title="entrar"
          color={COLORS.WHITE}
          backgroundColor={COLORS.PINK}
          onPress={() => alert('a')}
          />
          <Button
          title="cadastrar"
          color={COLORS.WHITE}
          borderColor={COLORS.WHITE}
          backgroundColor={COLORS.TRANSPARENT}
          onPress={() => alert('a')}
          />
        </View>
      </ImageBackground>
    </MotiView>
  );
}