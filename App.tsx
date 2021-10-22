import React from 'react';
import { Text } from 'react-native';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';

import { Home } from './src/screens/Home';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  if(!fontsLoaded) return <AppLoading />;
  
  return (
    <>
      <StatusBar 
        style="light" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}
