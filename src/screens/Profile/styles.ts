import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: 0,
  },
  containerIcon: {
    flex: 1,
    paddingTop:20,
    maxHeight: 100
  },
  iconList: {
    width: '100%',
    flexDirection: 'row',
    paddingTop:10,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontSize: 18
  },
  containerForm: {
    flex: 2,
    paddingTop:0,
    paddingHorizontal: 20
  }
});
