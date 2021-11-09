import React from 'react';

import {
  Image,
  ImageBackground,
  View
} from 'react-native';

import { styles } from './styles';
import { PlatformLabel } from '../PlatformLabel';
import { TrophyLabel } from '../TrophyLabel';
import { GameTitle } from '../GameTitle';

type Props = {
  title: string;
  button?: boolean;
}

export function Game({title, button = true} : Props){
  return (
    <>

    <View style={styles.container}>
      <View style={styles.boxImageGame}>
        <ImageBackground
            source={require('../../../assets/dbz-kakarot.png')}
            style={styles.imageBackground}
            >

            <View style={styles.boxPlatformLabel}>
              <PlatformLabel platform="steam"/>
              <TrophyLabel quantity={13} />
            </View>

        </ImageBackground>
      </View>
      <GameTitle title={title} button={button}/>
    </View>

    </>
  );
}
