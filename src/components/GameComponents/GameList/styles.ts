import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    marginTop: 60
  },
  title: {
    color: COLORS.GRAY_TERTIARY,
    fontSize: 16,
    marginBottom: 10
  }
});
