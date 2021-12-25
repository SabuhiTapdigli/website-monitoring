import {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {connect} from 'react-redux'
import {registerInitiate} from '../../Actions/authaction'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Register = () =>{
    const [input,setinput] = useState({
        username:'',
        mail:'',
        password:'',
        passwordrepeat:'',
    })
    const {username,mail,password} = input
    const dispatch = useDispatch();
    const {currentuser} = useSelector(state =>state.user)
    const inputhandler = (e) =>{
        setinput({...input,[e.target.id] : e.target.value})
    }
    const submithandler = (e) => {
        e.preventDefault()
        dispatch(registerInitiate(mail,password))
    }
    return(
        <Container>
            <h1>Register</h1>
             <form  onSubmit={submithandler}>
                 <label>Username</label>
            <input type='text' id='username' onChange={inputhandler}></input>
            <label>Email</label>
            <input type='mail' id='mail' onChange={inputhandler}></input>
            <label>Password</label>
            <input type='password' id='password' onChange={inputhandler}></input>
            <label>Repeat Password</label>
            <input type='password' id='passwordrepeat' onChange={inputhandler}></input>
            <button type='submit'>Register</button>
        </form>
        <Link to ='/login'>Login</Link>
        </Container>
       
    )
}
const Container = styled.div`
    h1{
        margin-top:30px;
    }
    
    width:30vw;
    margin:auto;
    form{
        display:flex;
        flex-direction:column;
        
    }
    input{
        border:1px solid red;
        height:30px;
        margin-bottom:10px;
    }
    button{
        height:40px;
        width:80px;
        background-color:red;
        margin:auto;
    }
`
export default connect()(Register) 