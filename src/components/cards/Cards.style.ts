import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingVertical: 5,
    paddingRight: 5,
    borderRadius: 50,
    height: 80,
  },
  imageSize: {
    width: 50, 
    height: 50
  },
  contentInfo: {
      marginHorizontal: 10
  }
})