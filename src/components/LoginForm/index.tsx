import React from 'react';

import {
  ImageBackground,
  Text,
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

import { PlatformList } from '../PlatformList';


export function LoginForm(){

  return (
      <ImageBackground 
        source={require('../../assets/bg-form-login.png')} 
        resizeMode="cover" 
        style={styles.image}>
        <View style={styles.container}>
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
  );
}