import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { ParamList } from "./types"

import { HomeScreenPageReduxed } from '../screens/homeScreen/HomeScreen'
import { UserDetailsPageReduxed } from '../screens/userDetailsScreen/UserDetailsScreen';
import { EditUserDetailsPageReduxed } from '../screens/editUserDetailsScreen/EditUserDetailsScreen';
import { CreateUserDetailsPageReduxed } from '../screens/createUserDetailsScreen/CreateUserDetailsScreen';

const StackNav = createStackNavigator<ParamList>();

export const HomeScreenStack: React.FC<{}> = () => {
    return(
        <StackNav.Navigator
            screenOptions={{}}
            initialRouteName="HomeScreen"
        >
            <StackNav.Screen
                name="HomeScreen"
                component={HomeScreenPageReduxed}
                options={{
                    headerShown: true
                }}
            />

            <StackNav.Screen
                name="UserDetailsScreen"
                component={UserDetailsPageReduxed}
                options={{
                    headerShown: true
                }}
            />

            <StackNav.Screen
                name="EditUserDetailsScreen"
                component={EditUserDetailsPageReduxed}
                options={{
                    headerShown: true
                }}
            />

            <StackNav.Screen
                name="CreateUserDetailsScreen"
                component={CreateUserDetailsPageReduxed}
                options={{
                    headerShown: true
                }}
            />

        </StackNav.Navigator>
    )
}