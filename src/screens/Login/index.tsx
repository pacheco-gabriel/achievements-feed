import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginForm } from '../../components/LoginComponents/LoginForm';

import { styles } from './styles';
import { BackButton } from '../../components/LoginComponents/BackButton';
import { CreateForm } from '../../components/LoginComponents/CreateForm';
import { FirstPage } from '../../components/LoginComponents/FirstPage';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const LoginStack = () => {  return (    
<NavigationContainer>      
  <Stack.Navigator>  
    <Stack.Screen name="FirstPage" component={FirstPage} />        
    <Stack.Screen name="CreateForm" component={CreateForm} />    
    <Stack.Screen name="LoginForm"  component={LoginForm} />       
    </Stack.Navigator>    
    </NavigationContainer>  
  );
};

export function Login(){
  return (
    <FirstPage />
  )
  
}