import * as types from '../Actions/actionTypes'

const initialState = {
    logdata:[],
    editlog:[]
}

const logReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.GETLOG:
            return({...state,logdata:action.payload})
        case types.GETEDITLOG:
            return({...state,editlog:action.payload})
        default:
            return state
    }
}
export default logReducer