import { ActionSheetIOS } from "react-native"

const initialState = {
    userList: null,
    loading: false,
    error: null
}

export const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'LOADING': return { userList: null, loading: true, error: null }
        case 'RECEIVING': return { userList: action.payload, loading: false, error: null}
        default: 
            return state
    }
}