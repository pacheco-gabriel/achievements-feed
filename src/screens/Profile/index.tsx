import React from 'react';

import { View,Text } from 'react-native';

import { Header } from '../../components/Header';
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
    </View>
  );
}
