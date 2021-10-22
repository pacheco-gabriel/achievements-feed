import { StyleSheet } from 'react-native';
import { COLORS } from './src/theme';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
  }
});