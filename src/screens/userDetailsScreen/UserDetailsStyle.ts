import {
    StyleSheet, Dimensions
  } from 'react-native';
import { color } from 'react-native-reanimated';
  
 const { width } = Dimensions.get('window');
    
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20
    },
    titleText: {
        fontSize: 24,
        textAlign:'center',
        margin: 10,
        fontWeight: '700'
    },
    imageSize: {
        width: 200,
        height: 200
    },
    largeText: {
        margin: 5,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
    mediumText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    buttonsView: {
        marginTop: 20,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
    }
})