import * as types from '../Actions/actionTypes';
const initialstate = {
    loading:false,
    currentuser:null,
    error:null
}
const authReducer = (state=initialstate,action) =>{
    switch(action.type){
        case types.LOGINSTART:
            return({...state,loading:true})
        case types.LOGINSUCCESS:
            return({...state,currentuser:action.payload})
        case types.LOGINERROR:
            return({...state,currentuser:action.payload})
        default:
            return state
    }
}
export default authReducer