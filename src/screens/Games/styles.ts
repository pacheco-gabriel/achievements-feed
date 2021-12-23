import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
  },
  formInput: {
    marginTop: 60,
    paddingHorizontal: 30,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    color: COLORS.WHITE
  }
});
