import React, { useState, useEffect }  from "react"
import { View, Text, ActivityIndicator } from "react-native"
import { connect } from "react-redux"

import { styles } from "./HomeScreenStyle"

import CustomList from "../../components/customList/CustomList"
import { CustomButton } from "../../components/buttons/CustomButton"

const HomeScreen: React.FC<{}> = (props: any) => {
    const { getUserList, prop, navigation } = props
    const { userList,loading, error } = prop.homepage
    const [ allUser, setAllUser ] = useState([])

    useEffect(() => {
        //if userInfo is null then get the list
        if(!userList){
            getUserList()
        }
        //if userInfo is not null then setAllUser
        if(userList){
            setAllUser(userList)
        }

    }, [userList])


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>CRUD USER App FirstCom</Text>
            <View style={styles.buttonsView}>
                <CustomButton buttonText={"Get All Users"} color="green" onTrigger={() => getUserList()}/>
                <CustomButton buttonText={"Create User"} color="blue" onTrigger={() => {navigation.navigate('CreateUserDetailsScreen')}}/>
            </View>
            <View style={styles.contentLayer}>
                { loading? <ActivityIndicator size="large"/> : <CustomList navProps={navigation} ListInfo={allUser}/> }
            </View>
            <Text style={styles.errorText}>{error}</Text>
            <Text style={styles.quoteText}>Built by Vincent Pacul</Text>
        </View>
    )    
}


const mapStateProps = (state: any) => {
    return { prop: state}
}

const getAllUserListAction = () => ( dispatch: any ) => {
    dispatch({ type: "LOADING" })
    const url = "https://reqres.in/api/users?page=2"
    fetch(url)
    .then( response => response.json() )
    .then( responseJson => {
        dispatch( { type: "RECEIVING", payload: responseJson.data })
    })
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserList: () => { dispatch( getAllUserListAction() ) }
    }
}

export const HomeScreenPageReduxed = connect(mapStateProps, mapDispatchToProps)(HomeScreen);