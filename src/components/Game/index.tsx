import React from 'react';

import {
  Image,
  ImageBackground,
  View
} from 'react-native';

import { styles } from './styles';
import { PlatformLabel } from '../../components/PlatformLabel';
import { TrophyLabel } from '../../components/TrophyLabel';
import { GameTitle } from '../../components/GameTitle';

export function Game(){
  return (
    <>

    <View style={styles.container}>
      <View style={styles.boxImageGame}>
        <ImageBackground
            source={require('../../assets/dbz-kakarot.png')}
            style={styles.imageBackground}
            >

            <View style={styles.boxPlatformLabel}>
              <PlatformLabel platform="steam"/>
              <TrophyLabel quantity="13"/>
            </View>

        </ImageBackground>
      </View>
      <GameTitle title="Dragon Ball Z: Kakarot"/>
    </View>

    </>
  );
}
