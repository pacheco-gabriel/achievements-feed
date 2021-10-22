import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
    paddingHorizontal:30
  },
  text: {
    color: COLORS.WHITE,
    padding: 20
  },
  image: {
    width: '100%',
    height: 600,
    flex: 3,
    top: 0 
  },
  input: {
    width: '100%',
    height: 50,
    textAlignVertical: 'top',
    color: COLORS.WHITE,
    borderBottomWidth: 1,
    borderColor: COLORS.WHITE,
    marginTop: 10
  }
});