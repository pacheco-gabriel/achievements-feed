import React from 'react';

import {
  Image,
  ImageBackground,
  View
} from 'react-native';

import { styles } from './styles';

export function HeaderLogin(){
  return (
    <>
      <ImageBackground 
          source={require('../../assets/bg-logo.png')} 
          resizeMode="cover" 
          style={styles.image}>
        <View style={styles.container}>
          <Image 
            source={require('../../assets/logo.png')} />
        </View>
      </ImageBackground>
    </>
  );
}