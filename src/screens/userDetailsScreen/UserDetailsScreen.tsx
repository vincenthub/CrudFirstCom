import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './UserDetailsStyle'
import { connect } from "react-redux"
import { ActivityIndicator } from 'react-native'
import { CustomButton } from '../../components/buttons/CustomButton'

export type UserDetails = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
}

const UserDetailsScreen: React.FC<{}> = (props: any) =>  {

    const { getUserInfo, doUserDelete, prop, navigation, route } = props
    const { userInfo,loading, error } = prop.detailpage
    const [ userDetails, setUserDetails ] = useState<UserDetails>({})
    const { id } = route.params

    useEffect(() => {
        //if userInfo is null then get the list
        if(!userInfo || id !== userInfo.id){
            getUserInfo(id)
        }
        //if userInfo is not null then setAllUser
        if(userInfo && id === userInfo.id){
            setUserDetails(userInfo)
        }
    }, [id, userInfo])

    const doDeleteAndBack = () => {
        doUserDelete(id, navigation)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>User Details</Text>
            {loading && userDetails? <ActivityIndicator size="large"/> : 
                <View>
                    <Image style={styles.imageSize} source={{uri: userDetails.avatar}}/>
                    <View>
                        <Text style={styles.largeText}>{userDetails.first_name + " " + userDetails.last_name}</Text>
                        <Text style={styles.mediumText}>{userDetails.email}</Text>    
                    </View>
                </View>
            }
            <View style={styles.buttonsView}>
                <CustomButton buttonText={"Edit User"} color="gray" onTrigger={() => { navigation.navigate('EditUserDetailsScreen', {userDetailsParam: userDetails})}}/>
                <CustomButton buttonText={"Delete User"} color="red" onTrigger={() => { doDeleteAndBack() }}/>
            </View>
        </View>
    )
}

const mapStateProps = (state: any) => {
    return { prop: state}
}

const getUserInfoAction = (id: number) => ( dispatch: any ) => {
    dispatch({ type: "LOADING_DETAILS" })
    const url = "https://reqres.in/api/users/" + id
    fetch(url)
    .then( response => response.json())
    .then( responseJson => {
        dispatch( { type: "RECEIVING_DETAILS", payload: responseJson.data })
    })
}

const doUserDeleteAction = (id: number, nav: any) => ( dispatch: any ) => {
    dispatch({ type: "LOADING_DETAILS" })
    const url = "https://reqres.in/api/users/" + id
    fetch(url, { method: 'DELETE'} )
    .then( response => response.json())
    .then( responseJson => {
        dispatch( { type: "RECEIVING_DETAILS", payload: null })
    })
}



const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserInfo: (id: number) => { dispatch( getUserInfoAction(id) ) },
        doUserDelete: (id: number, nav: any) => { dispatch( doUserDeleteAction(id, nav) ) }
    }
}

export const UserDetailsPageReduxed = connect(mapStateProps, mapDispatchToProps)(UserDetailsScreen);
