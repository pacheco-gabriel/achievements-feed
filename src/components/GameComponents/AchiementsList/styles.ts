import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    flexDirection: 'column'
  },
  circleProgressBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 120,
    height: 120,
    width: 120,
    borderColor: COLORS.PINK
  },
  circleProgress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 110,
    height: 110,
    width: 110,
    borderColor: COLORS.DISABLE
  },
  textProgress: {
    color: COLORS.WHITE,
    fontSize:30
  }
});