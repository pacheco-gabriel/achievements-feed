import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
  },
  containerIcon: {
    flex: 1,
    paddingTop:40,
  },
  iconList: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingTop:10,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontSize: 18
  }
});
