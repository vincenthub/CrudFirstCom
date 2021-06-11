import { ActionSheetIOS } from "react-native"

const initialState = {
    userInfo: null,
    loading: false,
    error: null
}

export const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'LOADING_DETAILS': return { userInfo: null, loading: true, error: null }
        case 'RECEIVING_DETAILS': return { userInfo: action.payload, loading: false, error: null}
        default: 
            return state
    }
}