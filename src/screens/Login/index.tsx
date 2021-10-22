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
import { BackButton } from '../../components/BackButton';

export function Login(){
  const [create, setCreate]       = useState(false);
  const [login, setLogin]         = useState(false);
  const [firstPage, setFirstPage] = useState(true);


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
      case 'fisrt':
        setFirstPage(true);
        setLogin(false);
        setCreate(false);
        break;
    }
  }

  if(login) return (
    <MotiView 
    from={{ opacity: 0, translateY: -50 }}
    animate={{ opacity: 1, translateY: 0}}
    transition={{type: 'timing', duration: 700}}
    style={styles.container}
    >
      <HeaderLogin />
      <BackButton onPress={() => setPage('first')} />
      <LoginPage />
    </MotiView>
  );

  if(create) return (
    <MotiView 
    from={{ opacity: 0, translateY: -50 }}
    animate={{ opacity: 1, translateY: 0}}
    transition={{type: 'timing', duration: 700}}
    style={styles.container}
    >
      <HeaderLogin />
      <BackButton onPress={() => setPage('first')} />
      <Text>Create</Text>
    </MotiView>
  );

  if(firstPage) return (
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