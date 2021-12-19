import * as types from '../Actions/actionTypes'

const initialstate = {
    hide:false,
    editmode:false
}
const formReducer = (state=initialstate,action)=>{
    switch(action.types){
        case types.EDITMODE:
            return({...state,hides:action.payload})
        default:
            return state
    }   
}
export default formReducer