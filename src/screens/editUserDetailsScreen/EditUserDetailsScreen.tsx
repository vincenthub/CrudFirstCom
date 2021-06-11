import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { CustomButton } from '../../components/buttons/CustomButton'
import { UserDetails } from '../userDetailsScreen/UserDetailsScreen'
import { styles } from './EditUserDetailsScreenStyle'

const EditUserDetailsScreen: React.FC<{}> = (props: any) =>  {

    const { doUserInfoUpdate, prop, route } = props
    const { updateAtInfo,loading, error } = prop.editdetailpage
    const { userDetailsParam } = route.params

    const [ userDetails, setUserDetails ] = useState<UserDetails>({})
    const [ firstName,  onFirstNameChange ] = useState(String)
    const [ lastName,  onLastNameChange ] = useState(String)
    const [ email,  onEmailChange ] = useState(String)
    const [ updateAt,  onUpdatedSet ] = useState(String)

    useEffect(() => {

        if(updateAtInfo){
            onUpdatedSet(updateAtInfo.updatedAt)
        }

        //if userInfo is null then get the list
        if(userDetails){
            setUserDetails(userDetailsParam)
        }

    }, [userDetailsParam, updateAtInfo])
    
    const SaveEditedInfo = () => {
        doUserInfoUpdate({
            first_name: firstName, 
            last_name: lastName, 
            email 
        })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imageSize} source={{uri: userDetails.avatar}}/>

            <View style={styles.headerView}>
                <Text style={styles.largeText}>Edit Information Below</Text>
            </View>
            <View style={styles.editFieldsView}>
                <TextInput
                    style={styles.input}
                    placeholder={userDetailsParam.first_name}
                    onChangeText={text => onFirstNameChange(text)}
                    value={firstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder={userDetailsParam.last_name}
                    onChangeText={text => onLastNameChange(text)}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder={userDetailsParam.email}
                    onChangeText={text => onEmailChange(text)}
                    value={email}
                />
            </View>
           
            <View style={styles.buttonsView}>
                <CustomButton buttonText={"SAVE USER INFO"} color="green" onTrigger={() => { SaveEditedInfo() }}/>
            </View>
            <Text style={styles.errorText}>{error}</Text>
            { loading? <ActivityIndicator size="small"/> : <Text style={styles.mediumText}>Updated AT: { updateAt }</Text> }
        </View>
    )
}

const mapStateProps = (state: any) => {
    return { prop: state}
}

const doUserInfoUpdateAction = (userInfo:UserDetails) => ( dispatch: any ) => {
    dispatch({ type: "LOADING_EDIT_DETAILS" })
    const url = "https://reqres.in/api/users/" + userInfo.id
    fetch(url, { 
        method: 'PATCH', 
        body: JSON.stringify({ 
                first_name: userInfo.first_name, 
                last_name: userInfo.last_name, 
                email: userInfo.email
            })
        })
    .then( response => response.json())
    .then( responseJson => {
        dispatch( { type: "RECEIVING_EDIT_DETAILS", payload: responseJson })
    })
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        doUserInfoUpdate: (userInfo: UserDetails) => { dispatch( doUserInfoUpdateAction(userInfo) ) }
    }
}

export const EditUserDetailsPageReduxed = connect(mapStateProps, mapDispatchToProps)(EditUserDetailsScreen);

