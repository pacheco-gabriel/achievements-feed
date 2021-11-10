import React from 'react';

import {
  Image,
  ImageBackground,
  View,
  Text
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


import { styles } from './styles';

type Props = {
  layout?: any; 
  options?: any; 
  route?: any;
  navigation?: any; 
}

export function Header({layout,options,route,navigation}:Props){
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxImageBackground}>
          <ImageBackground
              source={require('../../assets/bg-user.jpg')}
              style={styles.imageBackground}
              >
          </ImageBackground>
        </View>

        <View style={styles.boxImageUser}>
          <View>
            <Image source={require('../../assets/oseasmoreto.jpg')}
                  style={styles.imageUser}></Image>
          </View>

          <View style={styles.boxInfoUser}>
            <Text style={styles.textUserName}>OzzySupremo</Text>
            <Text style={styles.textUserAchivements}>
              <FontAwesome5 name="trophy" style={styles.icon} />
              45 conquistas
            </Text>
          </View>
        </View>

      </View>
    </>
  );
}
