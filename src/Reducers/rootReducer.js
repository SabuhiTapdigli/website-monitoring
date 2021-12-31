import { combineReducers } from 'redux';
import websitesReducer from '../Reducers/websitesReducer'
import authReducer from '../Reducers/authReducer'
import menuReducer from '../Reducers/menuReducer'



const rootReducer = combineReducers({
    data:websitesReducer,
    user:authReducer,
    menu:menuReducer,
})
export default rootReducer

