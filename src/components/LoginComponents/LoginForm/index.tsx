import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

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
import { BackButton } from '../BackButton';

type Props = {
 navigation: NavigationStackProp<any,any>
}


export function LoginForm({ navigation }: Props){

  return (
    <View style={styles.container}>
      <HeaderLogin />
      <ImageBackground 
        source={require('../../../assets/bg-form-login.png')} 
        resizeMode="cover" 
        style={styles.image}>
        <View style={styles.containerForm}>
          <BackButton onPress={() => navigation.goBack() } />
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
            onPress={() => navigation.navigate('Home') }
          />
          <Text style={styles.text}>ou</Text>
          <PlatformList />
        </View>
      </ImageBackground>
    </View>
  );
}