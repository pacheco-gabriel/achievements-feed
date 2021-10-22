import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  iconList: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal:30,
    justifyContent: 'center'
  },
  icon: {
    fontSize: 40,
    color: COLORS.WHITE,
    marginRight: 10
  }
});