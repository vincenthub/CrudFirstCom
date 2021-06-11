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
        marginBottom: 20
    },
    headerView: {
        marginVertical: 20,
        marginHorizontal: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
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
        textAlign: 'center',
        color: 'white'
    },
    mediumText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    errorText: {
        fontWeight: '400',
        fontSize: 14,
        color: 'red'
    },
    buttonsView: {
        marginHorizontal: 20,
        marginTop: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
        alignContent: 'center',
    },
    createFieldsView: {
        marginHorizontal: 20,
        alignSelf: 'stretch',
        justifyContent:'space-around',
        backgroundColor: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.3,
        paddingHorizontal: 5
    },
})