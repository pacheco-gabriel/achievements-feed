import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 10
  },
  input: {
    backgroundColor: "#383838",
    borderRadius: 30,
    height: 40,
    color: COLORS.WHITE,
    paddingHorizontal: 20
  },
  title: {
    color: COLORS.WHITE
  }
});