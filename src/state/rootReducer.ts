import { combineReducers } from 'redux'
import { reducer as homepage } from '../screens/homeScreen/state'
import { reducer as detailpage } from '../screens/userDetailsScreen/state'
import  { reducer as editdetailpage } from '../screens/editUserDetailsScreen/state'
import { reducer as createdetailpage} from '../screens/createUserDetailsScreen/state'

export const rootReducer = combineReducers({
    homepage,
    detailpage,
    editdetailpage,
    createdetailpage
})