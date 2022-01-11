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


export const addlogInitiate =(data)=>{
    return function(dispatch){
        db.collection('logging').doc().set(data)
        dispatch(addlog())
    }
}
export const getlogInitiate = () =>{
    return function(dispatch){
        db.collection('logging').onSnapshot((querySnapshot)=>{
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
