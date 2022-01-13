import * as types from '../Actions/actionTypes'

const initialState = {
    logdata:[]
}

const logReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.GETLOG:
            return({...state,logdata:action.payload})
        default:
            return state
    }
}
export default logReducer