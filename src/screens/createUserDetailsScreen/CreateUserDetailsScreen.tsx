import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { CustomButton } from '../../components/buttons/CustomButton'
import { UserDetails } from '../userDetailsScreen/UserDetailsScreen'
import { styles } from './CreateUserDetailsScreenStyle'

const CreateUserDetailsScreen: React.FC<{}> = (props: any) =>  {

    const { doUserInfoCreate, prop } = props
    const { createUserInfo, loading, error } = prop.createdetailpage

    const [ firstName,  onFirstNameChange ] = useState(String)
    const [ lastName,  onLastNameChange ] = useState(String)
    const [ email,  onEmailChange ] = useState(String)
    const [ createdAt,  onCreatedSet ] = useState(String)
    
    useEffect(() => {
        
        if(!createdAt){
         onCreatedSet("")
        }

        if(createUserInfo){
            onCreatedSet(createUserInfo.createdAt)
        }

    }, [createUserInfo, createdAt])

    const SaveNewInfo = () => {
        doUserInfoCreate({
            first_name: firstName, 
            last_name: lastName, 
            email 
        })
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.largeText}>Create New Information</Text>
            </View>
            <View style={styles.createFieldsView}>
                <TextInput
                    style={styles.input}
                    placeholder={"Input First Name"}
                    onChangeText={text => onFirstNameChange(text)}
                    value={firstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Input Last Name"}
                    onChangeText={text => onLastNameChange(text)}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Input Email Address"}
                    onChangeText={text => onEmailChange(text)}
                    value={email}
                />
            </View>
           
            <View style={styles.buttonsView}>
                <CustomButton buttonText={"SUBMIT USER INFO"} color="green" onTrigger={() => { SaveNewInfo() }}/>
            </View>
            <Text style={styles.errorText}>{error}</Text>
            {loading? <ActivityIndicator size="small"/> : <Text style={styles.mediumText}>Created AT: { createdAt }</Text> }
        </View>
    )
}

const mapStateProps = (state: any) => {
    return { prop: state}
}

const doUserInfoCreateAction = (userInfo:UserDetails) => ( dispatch: any ) => {
    dispatch({ type: "LOADING_CREATE_DETAILS" })
    const url = "https://reqres.in/api/users/" + userInfo.id
    fetch(url, { 
        method: 'POST', 
        body: JSON.stringify({ 
                first_name: userInfo.first_name, 
                last_name: userInfo.last_name, 
                email: userInfo.email
            })
        })
    .then( response => response.json())
    .then( responseJson => {
        dispatch( { type: "RECEIVING_CREATE_DETAILS", payload: responseJson })
    })
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        doUserInfoCreate: (userInfo: UserDetails) => { dispatch( doUserInfoCreateAction(userInfo) ) }
    }
}

export const CreateUserDetailsPageReduxed = connect(mapStateProps, mapDispatchToProps)(CreateUserDetailsScreen);

