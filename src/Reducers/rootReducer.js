import { combineReducers } from 'redux';
import websitesReducer from '../Reducers/websitesReducer'
// import formReducer from '../Reducers/formReducer'



const rootReducer = combineReducers({
    data:websitesReducer
})
export default rootReducer

