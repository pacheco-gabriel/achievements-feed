import React from 'react';

import { View, TextInput, Text, TextInputProps } from 'react-native';
import { COLORS } from '../../../theme';

import { styles } from './styles';

type Props = TextInputProps & {
  title?: string;
};

export function FormInput({title = '', ...rest }: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#888787"
        style={styles.input}
        {...rest}
       />
    </View>
  );
}