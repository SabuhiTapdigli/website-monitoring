import * as types from '../Actions/actionTypes'
const Initialstate = {
    links:[],
    error:'',
    userlist:[],
    userlisterror:''
}
const menuReducer = (state=Initialstate,action) =>{
    switch(action.type){
        case types.GET_MENU_ITEM:
            return ({...state,links:action.payload})
        case types.GET_MENU_ERROR:
            return({...state,error:action.payload})
        case types.USERLIST:
            return({...state,userlist:action.payload})
        case types.USERLISTERROR:
            return({...state,userlisterorr:action.payload})
        default:return state
    }
}
export default menuReducer