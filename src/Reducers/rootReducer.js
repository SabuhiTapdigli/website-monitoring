import { combineReducers } from 'redux';
import websitesReducer from '../Reducers/websitesReducer'
import authReducer from '../Reducers/authReducer'



const rootReducer = combineReducers({
    data:websitesReducer,
    user:authReducer
})
export default rootReducer

