import {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {connect} from 'react-redux'
import {registerInitiate} from '../../Actions/authaction'
import {Link} from 'react-router-dom';

import styled from 'styled-components'

const Login = () =>{
    const [input,setinput] = useState({
        mail:'',
        password:'',
    })
    const {mail,password} = input
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
            <h1>Login</h1>
        <form  onSubmit={submithandler}>
            <label>email</label>
            <input type='mail' id='mail' onChange={inputhandler}></input>
            <label>Password</label>
            <input type='password' id='password'></input>
            <button type='submit'>Login</button>
        </form>
        <Link to='/register'>Register</Link>
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
export default connect()(Login) 