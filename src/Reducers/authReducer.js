import * as types from '../Actions/actionTypes';
const initialstate = {
    loading:false,
    currentuser:null,
    error:null
}
const authReducer = (state=initialstate,action) =>{
    switch(action.type){
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return({...state,loading:true})
        case types.LOGOUT_SUCCESS:
            return({...state,currentuser:null})
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return({...state,currentuser:action.payload})
        case types.SET_USER:
            return{...state,currentuser:action.payload}
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return({...state,error:action.payload})
        default:
            return state
    }
}
export default authReducer