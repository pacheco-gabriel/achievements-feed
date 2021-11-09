import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';

import { Login } from './src/screens/Login';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { styles }               from './styles';
import { NavigationContainer }  from '@react-navigation/native';
import { NavBar }               from './src/components/NavBar';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });


  if(!fontsLoaded) return <AppLoading />;

  return (

    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar
          style="light"
          translucent
          backgroundColor="transparent"
        />
        <NavBar />
      </View>
    </NavigationContainer>
  );
}
