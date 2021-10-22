import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.BOLD
  }
});