import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
    flexDirection: 'column',
    marginTop: 20
  },
  circleProgressBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 130,
    height: 130,
    width: 130,
    borderColor: COLORS.PINK
  },
  circleProgress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 120,
    height: 120,
    width: 120,
    borderColor: COLORS.DISABLE
  },
  textProgress: {
    color: COLORS.WHITE,
    fontSize:30
  }
});