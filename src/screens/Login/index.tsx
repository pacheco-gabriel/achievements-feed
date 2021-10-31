import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginForm } from '../../components/LoginComponents/LoginForm';

import { CreateForm } from '../../components/LoginComponents/CreateForm';
import { FirstPage } from '../../components/LoginComponents/FirstPage';
import { Home } from '../Home';

const Stack = createNativeStackNavigator();

const LoginStack = () => {  return (    
     
  <Stack.Navigator>  
    <Stack.Screen options={{ headerShown: false }} name="FirstPage" component={FirstPage} />        
    <Stack.Screen options={{ headerShown: false }} name="CreateForm" component={CreateForm} />    
    <Stack.Screen options={{ headerShown: false }} name="LoginForm"  component={LoginForm} />     
    <Stack.Screen options={{ headerShown: false }} name="Home"  component={Home} />      
  </Stack.Navigator>    
  );
};

export function Login(){
  return (
    <LoginStack />
  )
  
}