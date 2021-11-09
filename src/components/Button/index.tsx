// @ts-nocheck

import React from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  borderColor?: ColorValue;
  isLoading?: boolean;
  customStyles?: {
    title?: {};
  };
}

export function Button({ title, color, backgroundColor, isLoading = false, borderColor = 'transparent', customStyles = {}, ...rest }: Props){
  return (
    <TouchableOpacity
    style={[styles.button, { backgroundColor, borderColor }, customStyles]}
    activeOpacity={0.7}
    disabled={isLoading}
    {...rest}
    >
      {
        isLoading ?
        <ActivityIndicator color={color} /> :
        <>
          <Text style={[typeof customStyles.title !== undefined ? customStyles.title : styles.title, { color }]}>
            { title }
          </Text>
        </>
      }
    </TouchableOpacity>
  );
}
