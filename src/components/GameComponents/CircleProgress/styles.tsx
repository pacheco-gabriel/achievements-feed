import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 110,
    flexDirection: 'column',
    marginTop: 20
  },
  circleProgressBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 110,
    height: 110,
    width: 110,
    borderColor: COLORS.PINK
  },
  circleProgress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 100,
    height: 100,
    width: 100,
    borderColor: '#888787'
  },
  textProgress: {
    color: COLORS.WHITE,
    fontSize:20
  }
});