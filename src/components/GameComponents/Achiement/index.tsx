import React from 'react';

import {View, Image, Text} from 'react-native';

import { styles } from './styles';

type Props = {
  achiement?: {};
};

export function Achiement({achiement = {}}: Props){
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../../assets/oseasmoreto.jpg')}
               style={styles.achiementImg}></Image>
      </View>
      <View>
        <Text style={styles.achiementTitle}>{achiement.title}</Text>
        <Text style={styles.achiementDescription}>{achiement.description}</Text>
      </View>
    </View>
  );
}
