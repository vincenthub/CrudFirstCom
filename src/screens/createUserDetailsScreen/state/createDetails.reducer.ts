const initialState = {
    createUserInfo: null,
    loading: false,
    error: null
}

export const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'LOADING_CREATE_DETAILS': return { createUserInfo: null, loading: true, error: null }
        case 'RECEIVING_CREATE_DETAILS': return { createUserInfo: action.payload, loading: false, error: null}
        default: 
            return state
    }
}