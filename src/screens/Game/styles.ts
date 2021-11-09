import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0
  },
  screen: {
    paddingHorizontal: 30,
    flex: 2,
    flexDirection: 'row'
  }
});
