import { StyleSheet } from 'react-native';
import { COLORS,FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxHeight: 180,
    minHeight: 180,
    position: "relative",
    backgroundColor: COLORS.BLACK_SECONDARY,
    marginBottom: 170
  },
  boxImageBackground: {
    borderWidth: 1,
    borderColor: COLORS.PINK,
    top: -20,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    borderRadius: 20,
    height: 180
  },
  imageUser: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.PINK,
    borderRadius: 100,
  },
  boxImageUser: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 100,
    left: 30
  },
  boxInfoUser: {
    marginLeft: 10
  },
  textUserName: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: 22
  },
  textUserAchivements: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15
  },
  icon: {
    marginRight: 5
  }
});
