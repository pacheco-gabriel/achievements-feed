import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
  },
  title: {
    color: COLORS.WHITE
  },
  scrollView: {
    marginTop: 40
  }
});
