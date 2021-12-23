import React from 'react';

import {
  View,
  ScrollView,
  Text
} from 'react-native';
import { Achiement } from '../Achiement';
import { styles } from './styles';

type Props = {
  achiements?: [];
};

export function AchiementsList({achiements = []}: Props){
  return (
    <ScrollView>
      {
        achiements.map(
          (achiement, key) => <Achiement key={key} achiement={achiement}/>
        )
      }
    </ScrollView>
  );
}
