import { combineReducers } from 'redux';
import websitesReducer from '../Reducers/websitesReducer'
import authReducer from '../Reducers/authReducer'
import menuReducer from '../Reducers/menuReducer'
import logReducer from './logReducer';



const rootReducer = combineReducers({
    data:websitesReducer,
    user:authReducer,
    menu:menuReducer,
    log:logReducer
})
export default rootReducer

