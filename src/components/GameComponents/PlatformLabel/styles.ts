import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  boxLabel: {
    borderRadius: 5,
    maxHeight: 16,
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    maxWidth: 70
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 11
  }
});
