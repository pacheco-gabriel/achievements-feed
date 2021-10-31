import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFirsPage: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 30,
    paddingTop:80
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    top: 20 
  },
  text: {
    color: COLORS.WHITE
  }
});