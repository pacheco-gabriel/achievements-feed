import { StyleSheet } from 'react-native';
import { COLORS,FONTS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxImageGame : {
    borderWidth: 1,
    borderColor: COLORS.PINK,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: 150
  },
  boxPlatformLabel:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
});
