import React, { useState } from 'react';

import {
  View
} from 'react-native';
import { FirsPage } from '../../components/FirsPage';
import { HeaderLogin } from '../../components/HeaderLogin';

import { styles } from './styles';

export function Login(){
  const [create, setCreate]       = useState(false);
  const [login, setLogin]         = useState(false);
  const [firstPage, setFirstPage] = useState(true);

  return (
    <View style={styles.container}>
      <HeaderLogin />
      <FirsPage />
    </View>
  );
}