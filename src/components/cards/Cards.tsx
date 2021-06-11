import { types } from '@babel/core'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { styles } from '../cards/Cards.style'

export type CardProps = {
    onPressCard: any;
    userInfo: {
        id: string, 
        email: string, 
        first_name: string, 
        last_name: string, 
        avatar: string 
    }
}

const Cards = (props: CardProps) => {
    const { userInfo, onPressCard } = props
    return (
        <TouchableWithoutFeedback onPress={() => onPressCard()}>
            <View style={styles.container}>
                <Image style={styles.imageSize} source={{uri: userInfo.avatar}}/>
                <View style={styles.contentInfo}>
                    <Text>{userInfo.first_name}</Text>
                    <Text>{userInfo.last_name}</Text>
                    <Text>{userInfo.email}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
       
    )
}

export default Cards