import {useState,useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { hideElement } from '../../Actions/authaction'
import {auth} from '../../firebaseConfig/fbConfig'




const Setting = () =>{
    const dispatch  = useDispatch()
    const {currentuser,hide} = useSelector(state =>state.user)
    const [input,setinput] = useState({
        username : '',
        email : ''
    })
    useEffect(()=>{
        if(hide){
            setinput({username:currentuser.displayName,email:currentuser.email})
        }
    },[hide])
    
    const {username,email} = input || {}
    const hideHandler = () =>{
        dispatch(hideElement(false))
    }
    const inputhandler = (e) => { 
        setinput({[e.target.id] : e.target.value})
    }
    const submithandler = (e) =>{
        e.preventDefault()
        auth.currentUser.updateProfile({displayName:input.username})
        auth.currentUser.updateEmail(input.email)
        setinput({username : '',email : ''})
        
          
    }
    return(
        <>
            {hide && 
            <Main>
                <div onClick={hideHandler}>X</div>
                <h1>Personal Details</h1>
                <form onSubmit={submithandler}>
                    <label>Username</label>
                    <input name='username' id='username' value={username} onChange={inputhandler}></input>
                    <label>Email</label>
                    <input name='email' id='email' value={email} onChange={inputhandler}></input>
                    <button type='submit'> Save </button>
                </form>
            </Main>
            }
            
        </>
    )
}
const Main = styled.div`
    background-color:gray;
    width:40%;
    padding:50px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index:10;
    div{
        right:7%;
        top:10%;
        position: absolute;
        color:white;
        cursor:pointer
    }
    form{
        display:flex;
        flex-direction:column;
        
    }
    input{
        border:1px solid red;
        height:30px;
        margin-bottom:10px;
        color:black;
    }
    button{
        height:40px;
        width:80px;
        background-color:red;
        margin:auto;
    }
`

export default Setting