import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { styles } from './CustomButton.style'

export type ButtonProps = {
    buttonText: string,
    color: string,
    onTrigger: any
}

export const CustomButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { buttonText, color, onTrigger } = props
    return (
        <TouchableHighlight 
            style={[styles.container, {backgroundColor: color}]} 
            onPress={() => onTrigger()}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
    )
}

