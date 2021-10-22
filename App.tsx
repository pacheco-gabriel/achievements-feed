import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';

import { Home } from './src/screens/Home';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  if(!fontsLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <StatusBar 
        style="light" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </View>
  );
}

