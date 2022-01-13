import * as types from '../Actions/actionTypes'
import db from '../firebaseConfig/fbConfig'
const addlog = () =>({
    type:types.ADDLOG
})
const getlog = (datas) =>({
    type:types.GETLOG,
    payload:datas
})
const actionlog = () =>({
    type:types.ACTIONLOG
})
const editlog = () =>({
    type:types.EDITLOG
})
export const addlogInitiate =(data)=>{
    return function(dispatch){
        db.collection('logging').doc().set(data)
        dispatch(addlog())
    }
}
export const getlogInitiate = () =>{
    return function(dispatch){
        db.collection('logging').orderBy('time','desc').onSnapshot((querySnapshot)=>{
            const log = []
            querySnapshot.forEach((doc)=>
            log.push({...doc.data(),id:doc.id})
            )
            dispatch(getlog(log))
        })
    }
}
export const actionlogInitiate = (data) =>{
    return function(dispatch){
        db.collection('logging').doc().set(data)
        dispatch(actionlog())
    }
}
export const editlogInitiate = (input) =>{
    return function(dispatch) {
        db.collection('editlog').doc().set(input)
        dispatch(editlog())
    }
}
