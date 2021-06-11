import { ActionSheetIOS } from "react-native"

const initialState = {
    updateAtInfo: null,
    loading: false,
    error: null
}

export const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'LOADING_EDIT_DETAILS': return { updateAtInfo: null, loading: true, error: null }
        case 'RECEIVING_EDIT_DETAILS': return { updateAtInfo: action.payload, loading: false, error: null}
        default: 
            return state
    }
}