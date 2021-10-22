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

import { FontAwesome5 } from '@expo/vector-icons';


export function LoginPage(){

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
          <View style={styles.iconList}>
            <FontAwesome5 name="playstation" style={styles.icon} />
            <FontAwesome5 name="xbox" style={styles.icon} />
            <FontAwesome5 name="steam" style={styles.icon} />
          </View>
        </View>
      </ImageBackground>
  );
}