import { ScrollView } from '@motify/components';
import React from 'react';

import { View,Text } from 'react-native';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { FormInput } from '../../components/ProfileComponents/FormInput';
import { PlatformButton } from '../../components/ProfileComponents/PlatformButton';
import { COLORS } from '../../theme';

import { styles } from './styles';

export function Profile(){
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerIcon}>
        <Text style={styles.title}>Vincular Perfil</Text>
        <View style={styles.iconList}>
          <PlatformButton icon="playstation" color={COLORS.DISABLE} />
          <PlatformButton icon="xbox" color={COLORS.DISABLE} />
          <PlatformButton icon="steam" />
        </View>
      </View>
      <ScrollView style={styles.containerForm}>
        <FormInput
          title="Usuário"
          placeholder="Usuário"
        />
        <FormInput
          title="E-mail"
          keyboardType="email-address"
          placeholder="E-mail"
        />
        <FormInput
          title="Senha"
          placeholder="Senha"
        />
        <Button
          title="salvar"
          color={COLORS.WHITE}
          borderColor={COLORS.PINK}
          backgroundColor={COLORS.PINK}
        >Salvar</Button>
      </ScrollView>
    </View>
  );
}
