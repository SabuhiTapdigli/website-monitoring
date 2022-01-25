import * as types from './actionTypes'
import db from '../firebaseConfig/fbConfig';

const additem = () =>({
    type:types.ADDITEM
})
const getitems = (websites) =>({
    type:types.GETITEMS,
    payload:websites
})
const deleteitem = (id) =>({
    type:types.DELETEITEM
})
const edititem = (website) =>({
    type:types.EDITITEM,
    payload:website
})
const updateitem = () =>({
    type:types.UPDATEITEM
})
const searchitem = (search) =>({
    type:types.SEARCHITEMS,
    payload:search
})
const copyitem = () =>({
    type:types.COPYITEM
})
const deleteall = () =>({
    type:types.DELETEALL
})
const editedmode = (boolean) =>({
    type: types.EDITMODE,
    payload:boolean
})
// get data from firebase
export const getitemsInitiate = (websites) =>{
    return function(dispatch){
        db.collection('websites').onSnapshot((querySnapshot)=>{
            const websites = []
            querySnapshot.forEach((doc)=>{
                websites.push({
                    ...doc.data(),id:doc.id
                })
                dispatch(getitems(websites))
            })
        })
    }
}
// add data to firebase
export const additemInitiate = (input) => {
    return function(dispatch){
        db.collection('websites').doc().set(input)
        dispatch(additem())
    }
}
// delete data from firebase
export const deleteitemInitiate = (id) =>{
    return function(dispatch){
        db.collection('websites').doc(id).delete()
        dispatch(deleteitem())
    }
    
}
// edit data on firebase
export const edititemInitiate = (id) =>{
    return function(dispatch){
        db.collection('websites').doc(id).get().then((website)=>{
            dispatch(edititem({...website.data()}))
        })
        
    }
}
// update data on firebase
export const updateitemInitiate = (id,website) =>{
    return function(dispatch){
        db.collection('websites').doc(id).update(website)
        dispatch(updateitem)
    }

}

// search item
export const searchitemInitiate = (search) =>{
    return function(dispatch) {
        dispatch(searchitem(search))
    }
}

// copy data on firebase
export const copyitemInitiate = (copieditemdata) =>{
    return function(dispatch) {
        db.collection('websites').doc().set(copieditemdata)
        dispatch(copyitem())
    }
}

export const deleteitemAllInitiate = (id) =>{
    return function(dispatch){
        id.forEach(i=>db.collection('websites').doc(i).delete())
        dispatch(deleteall())
    }
}

export const editedmodeinitialzer = (boolean) =>{
    return function(dispatch){
        dispatch(editedmode(boolean))
    }
}