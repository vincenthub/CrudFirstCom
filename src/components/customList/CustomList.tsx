import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import Cards from '../cards/Cards'
import { styles } from './CustomList.style'

export type CustomProps = {
    ListInfo: any;
    navProps: any
}

const CustomList = (props: CustomProps) => {

    const { ListInfo, navProps } = props

    const renderItem = ({ item }) => {
        return(
            <Cards
                userInfo={item}
                onPressCard={() => navProps.navigate('UserDetailsScreen', {id: item.id})}
            />
        )
    } 

    return (
        <View style={styles.container}>
             <FlatList
                style={styles.flatlist}
                data={ListInfo}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CustomList
