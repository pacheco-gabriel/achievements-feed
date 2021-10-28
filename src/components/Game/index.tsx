import React from 'react';

import {
  Image,
  ImageBackground,
  View
} from 'react-native';

import { styles } from './styles';
import { PlatformLabel } from '../../components/PlatformLabel';

export function Game(){
  return (
    <>

    <View style={styles.container}>
      <View style={styles.boxImageGame}>
        <ImageBackground
            source={require('../../assets/bg-user.jpg')}
            style={styles.imageBackground}
            >

            <PlatformLabel platform="steam"/>
            <PlatformLabel platform="xbox"/>
            <PlatformLabel platform="playstation"/>


        </ImageBackground>
      </View>
    </View>

    </>
  );
}
