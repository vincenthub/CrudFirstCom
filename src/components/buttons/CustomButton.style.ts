import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5
  },
  buttonText: {
      color: 'white',
      fontSize: 14
  }
})