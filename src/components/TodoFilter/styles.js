import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderRadius: 10
  },
  center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  btnAll: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnUnfinished: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
  }

}) 