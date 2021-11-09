import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 60,
    paddingHorizontal: 30
  },
  iconTrophy:{
    color: COLORS.WHITE,
    fontSize: 30,
    marginRight: 10
  },
  textAchievements:{
    color: COLORS.WHITE,
    fontSize: 14
  },
  progress:{
    backgroundColor: '#888787',
    width: '100%',
    borderRadius: 10,
    height: 10
  },
  progressBar: {
    backgroundColor: COLORS.PINK,
    width: '50%',
    borderRadius: 10,
    height: 10
  }
});