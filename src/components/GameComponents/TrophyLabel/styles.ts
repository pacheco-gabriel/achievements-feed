import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    maxHeight: 18,
    marginHorizontal: 20
  },
  textTrophy: {
    color: COLORS.WHITE,
    fontSize: 11
  }
});
