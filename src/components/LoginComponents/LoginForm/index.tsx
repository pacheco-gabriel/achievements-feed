import React from 'react';

import {
  ImageBackground,
  Text,
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../../theme';
import { Button } from '../../Button';

import { styles } from './styles';

import { PlatformList } from '../PlatformList';
import { HeaderLogin } from '../HeaderLogin';
import { MotiView } from '@motify/components';


export function LoginForm(){

  return (
    <MotiView 
    from={{ opacity: 0, translateY: -50 }}
    animate={{ opacity: 1, translateY: 0}}
    transition={{type: 'timing', duration: 700}}
    style={styles.container}
    >
      <HeaderLogin />
      <ImageBackground 
        source={require('../../../assets/bg-form-login.png')} 
        resizeMode="cover" 
        style={styles.image}>
        <View style={styles.containerForm}>
          <TextInput
            keyboardAppearance="dark"
            placeholder="usuário"
            placeholderTextColor={COLORS.WHITE}
            style={styles.input}
          />
          <TextInput
            keyboardAppearance="dark"
            placeholder="senha"
            placeholderTextColor={COLORS.WHITE}
            style={styles.input}
          />
          <Button
            title="entrar"
            color={COLORS.WHITE}
            borderColor={COLORS.WHITE}
            backgroundColor={COLORS.TRANSPARENT}
          />
          <Text style={styles.text}>ou</Text>
          <PlatformList />
        </View>
      </ImageBackground>
    </MotiView>
  );
}