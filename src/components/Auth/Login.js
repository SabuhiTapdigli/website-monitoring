import {useState,useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {connect} from 'react-redux'
import {loginInitiate} from '../../Actions/authaction'
import {Link,useNavigate} from 'react-router-dom';
import styled from 'styled-components'

const Login = () =>{
    const [input,setinput] = useState({
        mail:'',
        password:'',
    })
    const {mail,password} = input
    const dispatch = useDispatch();
    const history  = useNavigate()
    const {currentuser} = useSelector(state =>state.user)

    useEffect(()=>{
        if(currentuser){
            history('/')
        }
    },[currentuser,history])

    const inputhandler = (e) =>{
        setinput({...input,[e.target.id] : e.target.value})
    }
    const submithandler = (e) => {
        e.preventDefault()
        if(!mail || !password){
            return
        }
        dispatch(loginInitiate(mail,password))
        setinput({mail:'',password:''})
    }
    return(
        <Container>
            <h1>Login</h1>
        <form  onSubmit={submithandler}>
            <label>email</label>
            <input type='mail' id='mail' onChange={inputhandler}></input>
            <label>Password</label>
            <input type='password' id='password' onChange={inputhandler}></input>
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