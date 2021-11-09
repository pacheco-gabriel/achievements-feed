import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 10
  },
  gameTitle: {
    fontSize: 16,
    color: COLORS.WHITE,
    maxWidth: "65%",
  },
  mainButton:{
    maxWidth: "35%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    height: 30,
    marginTop: 0
  },
  title: {
    fontSize: 10
  }
});
