import * as types from './actionTypes'
import {auth} from '../firebaseConfig/fbConfig'

const loginstart = () => ({
    type:types.LOGINSTART
})
const loginsuccess = () =>({
    type:types.LOGINSUCCESS
})
const loginfail = () => ({
    type:types.LOGINERROR
})

export const registerInitiate = (mail,password,username) => {
    return function(dispatch){
        dispatch(loginstart());
        
        
    }

}