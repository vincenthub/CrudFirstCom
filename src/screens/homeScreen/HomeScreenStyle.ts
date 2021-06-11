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
    buttonsView: {
        height: 40,
        marginVertical: 5,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contentLayer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        marginVertical: 5
    },
    errorText: {
        fontWeight: '400',
        fontSize: 14,
        color: 'red'
    },
    quoteText: {
        fontWeight: '600',
        fontSize: 14,
        color: 'gray'
    }
})