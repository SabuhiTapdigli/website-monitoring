import * as types from '../Actions/actionTypes'
import db from '../firebaseConfig/fbConfig'
const getmenuitem = (data) => ({
    type:types.GET_MENU_ITEM,
    payload:data
})
// const getmenuerror = (error) =>({
//     type:types.GET_MENU_ERROR,
//     payload:error
// })

const userlist = (user) => ({
    type:types.USERLIST,
    payload:user
})
// const userlisterror = (error) =>({
//     type:types.USERLISTERROR,
//     payload:error
// })


export const getmenuInitiate = (menu) =>{
    return function(dispatch){
        db.collection('leftsidebar').onSnapshot((querySnapshot) => {
            const menu = []
            querySnapshot.forEach((doc)=>{
                menu.push({
                    ...doc.data(),id:doc.id
                })
                dispatch(getmenuitem(menu))
            })
            }
        )
    }
}

export const userlistInitiate = () =>{
    return function(dispatch){
        db.collection('user').onSnapshot((querySnapshot)=>{
            const userlists = []
            querySnapshot.forEach((doc)=>{
                userlists.push({...doc.data(),id:doc.id})
            })
            dispatch(userlist(userlists))
        })
    }
}

