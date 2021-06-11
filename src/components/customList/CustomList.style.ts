import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingRight: 5,
    borderRadius: 10
  },
  flatlist: {
    flex: 1,
    alignSelf: 'stretch',
  }
})