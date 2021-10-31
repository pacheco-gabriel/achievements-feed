import { MotiView } from '@motify/components';
import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

import {
  ImageBackground,
  View
} from 'react-native';
import { COLORS } from '../../../theme';
import { Button } from '../../Button';
import { HeaderLogin } from '../HeaderLogin';

import { styles } from './styles';

type Props = {
 navigation: NavigationStackProp<any,any>
}

export function FirstPage({ navigation }: Props) {
  
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
          onPress={() => navigation.navigate('LoginForm') }
          />
          <Button
          title="cadastrar"
          color={COLORS.WHITE}
          borderColor={COLORS.WHITE}
          backgroundColor={COLORS.TRANSPARENT}
          onPress={() => navigation.navigate('CreateForm')}
          />
        </View>
      </ImageBackground>
    </MotiView>
  );
}