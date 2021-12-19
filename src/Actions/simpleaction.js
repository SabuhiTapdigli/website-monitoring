import * as types from '../Actions/actionTypes'

const editedmode = (boolean) =>({
    type: types.EDITMODE,
    payload:boolean
})

export const editedmodeinitialzer = (boolean) =>{
    return function(dispatch){
        dispatch(editedmode(boolean))
    }
}


