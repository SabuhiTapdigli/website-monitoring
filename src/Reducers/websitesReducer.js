import * as types from '../Actions/actionTypes';

const initialState = {
    data:[],
    searchdata:[],
    searched:'',
    hide:false,
    
}
const websiteReducer = (state=initialState,action) => {
    switch (action.type){
        case types.GETITEMS:
            return({data:action.payload,searchdata:action.payload})
        case types.EDITITEM:
            return({...state,website:action.payload})
        case types.SEARCHITEMS:
            return({
                ...state,searched:action.payload,searchdata:state.data.filter((e)=>{
                    return Object.values(e).join(" ").toLowerCase().includes(action.payload.toLowerCase())
                })
            })
        case types.EDITMODE:
            return({
                ...state,hide:action.payload
            })
        // case types.DELETEALL:
        //     return({data:[],searchdata:[]})
        default:
            return state
    }
}
export default websiteReducer