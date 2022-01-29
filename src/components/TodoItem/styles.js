import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      width: '100%',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10,
      padding: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  textContainer: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center'
  },
  btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  }
}) 