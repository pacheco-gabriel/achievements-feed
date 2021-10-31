import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    bottom: 0,
    maxHeight: 60,
    width: '100%',
    backgroundColor: COLORS.PINK
  },
  itemMenu:{
    color: COLORS.WHITE
  },
  icon: {
    fontSize:20
  }
});