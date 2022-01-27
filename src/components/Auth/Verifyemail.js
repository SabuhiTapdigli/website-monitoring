import styled from 'styled-components';
import { useDispatch , useSelector} from 'react-redux'
import { logoutinitiate } from '../../Actions/authaction';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'
const Verifyemail = () =>{
    const dispatch = useDispatch()
    const history  = useNavigate()
    const {currentuser} = useSelector(state =>state.user)
    const logouthandler = (e) =>{
        e.preventDefault()
        dispatch(logoutinitiate())
    }
    useEffect(()=>{
        if(!currentuser){
            history('/')
        }
    },[currentuser,history])
    return(
        <>
        <Nav>
            <Container>
                <Navlinks>
                    <li><a href='/' onClick={logouthandler}>Logout</a></li>
                </Navlinks>
            </Container>
        </Nav>
        <h1>Please Verify Your Mail</h1>
        </>
    )
}   

const Nav = styled.div`
    background-color:black;
    color:white;
    padding:10px;
`
const Container = styled.div`
    // width:1100px;
    margin:auto;
    display:flex;
    justify-content:space-between;
   
    
`
const Logo = styled.div`
    text-align:center;
    margin:auto;

`
const Search = styled.input`
    height:40px;
    width:50%;
    color:black;
`
const Navlinks = styled.ul`

    display:flex;
    margin:auto;
    li{
        list-style:none;
        margin-left:15px;
    }
    a{
        text-decoration:none;
        color:white;
    }

`
export default Verifyemail
