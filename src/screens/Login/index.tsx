import React, { useState } from 'react';

import { MotiView } from 'moti';

import {
  ImageBackground,
  Text,
  View
} from 'react-native';
import { Button } from '../../components/Button';
import { LoginPage } from '../../components/LoginPage';
import { HeaderLogin } from '../../components/HeaderLogin';
import { COLORS } from '../../theme';

import { styles } from './styles';

export function Login(){
  const [create, setCreate]       = useState(false);
  const [login, setLogin]         = useState(false);
  const [firstPage, setFirstPage] = useState(true);

  console.log(create);
  console.log(login);

  function setPage(page: string){
    switch (page) {
      case 'login':
        setFirstPage(false);
        setLogin(true);
        setCreate(false);
        break;
      case 'create':
        setFirstPage(false);
        setLogin(false);
        setCreate(true);
        break;
      default:
        setFirstPage(true);
        setLogin(false);
        setCreate(false);
        break;
    }
  }

  if(login) return (
    <View style={styles.container}>
      <HeaderLogin />
      <LoginPage />
    </View>
  );

  console.log(create)
  if(create) return (
    <View style={styles.container}>
      <HeaderLogin />
      <Text>Create</Text>
    </View>
  );

  return (
    <MotiView 
    from={{ opacity: 0, translateY: -50 }}
    animate={{ opacity: 1, translateY: 0}}
    transition={{type: 'timing', duration: 700}}
    style={styles.container}
    >
      <HeaderLogin />
      
      <ImageBackground 
        source={require('../../assets/bg-form-first.png')} 
        resizeMode="cover" 
        style={styles.image}>
        <View style={styles.containerFirsPage}>
          <Button
          title="entrar"
          color={COLORS.WHITE}
          backgroundColor={COLORS.PINK}
          onPress={() => setPage('login')}
          />
          <Button
          title="cadastrar"
          color={COLORS.WHITE}
          borderColor={COLORS.WHITE}
          backgroundColor={COLORS.TRANSPARENT}
          onPress={() => setPage('create')}
          />
        </View>
      </ImageBackground>
    </MotiView>
  );
}