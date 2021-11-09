import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
    justifyContent: 'center'
  },
  headerGame: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    height: 350,
    paddingTop: 60
  },
  screen: {
    paddingHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerTrophy: {
    flex: 2,
    height: 140
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD
  },
  subTitle: {
    color: COLORS.DISABLE
  }
});
