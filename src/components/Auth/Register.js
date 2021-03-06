import {useState,useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {connect} from 'react-redux'
import {registerInitiate} from '../../Actions/authaction'
import styled from 'styled-components'
import {Link,useNavigate} from 'react-router-dom'

const Register = () =>{
    const {currentuser} = useSelector(state =>state.user)
    const [input,setinput] = useState({
        displayName:'',
        mail:'',
        password:'',
        passwordrepeat:'',
        role:'guest'
    })
    const {displayName,mail,password,passwordrepeat,role} = input
    const dispatch = useDispatch();
    const history = useNavigate()
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
        if(mail.includes('@antetechnologies.com')){
            dispatch(registerInitiate(mail,password,displayName,role))
        }
        else if(mail.includes('@azventure.net')){
            dispatch(registerInitiate(mail,password,displayName,role))
        }
        else if(password !== passwordrepeat){
            alert('password not match')
            return;
        }
        else {
            alert('Sorry you can not register')
        }
        // setinput({mail:'',password:'',passwordrepeat:''})
    }
    return(
        <Container>
            <h1>Register</h1>
             <form  onSubmit={submithandler}>
                 <label>Username</label>
            <input type='text' id='displayName' value={displayName} onChange={inputhandler}></input>
            <label>Email</label>
            <input type='mail' id='mail' value={mail} onChange={inputhandler}></input>
            <label>Password</label>
            <input type='password' id='password' value={password} onChange={inputhandler}></input>
            <label>Repeat Password</label>
            <input type='password' id='passwordrepeat' value={passwordrepeat} onChange={inputhandler}></input>
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