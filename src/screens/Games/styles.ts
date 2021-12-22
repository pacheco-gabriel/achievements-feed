import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
  },
  title: {
    color: COLORS.WHITE
  }
});
