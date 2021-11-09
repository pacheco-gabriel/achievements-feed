import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0
  },
  screen: {
    paddingHorizontal: 30,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerTrophy: {
    flex: 2,
    height: 200
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD
  },
  subTitle: {
    color: COLORS.DISABLE
  }
});
