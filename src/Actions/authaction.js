import * as types from './actionTypes'
import {auth} from '../firebaseConfig/fbConfig'
import db from '../firebaseConfig/fbConfig'
const loginstart = () => ({
    type:types.LOGIN_START
})
const loginsuccess = (user) =>({
    type:types.LOGIN_SUCCESS,
    payload:user
})
const loginerror = (error) => ({
    type:types.LOGIN_ERROR,
    payload:error
})

const registerstart = () =>({
    type:types.REGISTER_START
})
const registersuccess = (user) =>({
    type:types.REGISTER_SUCCESS,
    payload:user
})
const registererror = (error) =>({
    type:types.REGISTER_ERROR,
    payload:error
})
const logoutstart = () => ({
    type:types.LOGOUT_START
})
const logoutsuccess = () =>({
    type:types.LOGOUT_SUCCESS
})
const logouterror = () => ({
    type:types.LOGOUT_ERROR
})

export const setuser = (user) =>({
    type:types.SET_USER,
    payload:user
})

export const hideElement = (boolean) =>({
    type:types.HIDE_ELEMENT,
    payload:boolean
})
export const registerInitiate = (mail,password,displayName,role) => {
    return function(dispatch){
        dispatch(registerstart());
        auth.createUserWithEmailAndPassword(mail,password)
        .then(({user})=>{
            user.updateProfile({
                displayName
            })
            db.collection('user').doc(user.uid).set({uid:user.uid,mail,role})
            dispatch(registersuccess(user))
        })
        .catch((error)=>dispatch(registererror(error)))
    }
}

export const loginInitiate = (mail,password) => {
    return function(dispatch){
        dispatch(loginstart())
        auth.signInWithEmailAndPassword(mail,password)
        .then(({user})=>{
            dispatch(loginsuccess(user))
        })
        .catch((error)=>{dispatch(loginerror(error.message))})
    }
}

export const logoutinitiate = () =>{
    return function(dispatch){
        dispatch(logoutstart())
        auth.signOut()
        .then((resp)=>{dispatch(logoutsuccess(resp))})
        .catch((error)=>{dispatch(logouterror(error.message))})
    }
}

