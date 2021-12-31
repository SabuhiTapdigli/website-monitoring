import {useEffect} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import { searchitemInitiate } from '../../Actions/action';
import { useDispatch , useSelector } from 'react-redux'
import { logoutinitiate, hideElement } from '../../Actions/authaction';
import {Link} from 'react-router-dom'
import Setting from '../Settings/Setting';

const Navbar = () => {
    const dispatch = useDispatch()
    const {searched} = useSelector(state=>state.data)
    const {currentuser} = useSelector(state=>state.user)
    const searchandler = (e) =>{
        dispatch(searchitemInitiate(e.target.value))
    }
    const logouthandler = (e) =>{
        e.preventDefault()
        dispatch(logoutinitiate())
    }
    const settinghandler = () =>{
        dispatch(hideElement(true))
    }
    return(
        <Nav>
            <Container>
                <Logo><Link to='/'>Logo</Link></Logo>
                <Search placeholder='Search' onChange={searchandler} value={searched}></Search>
                <Navlinks>
                    <li><a href='' onClick={logouthandler}>Logout</a></li>
                    <li>{currentuser && currentuser.displayName}</li>
                    <li><a href='#' onClick={settinghandler}>Settings</a></li>
                </Navlinks>
            </Container>
            <Setting/>
        </Nav>
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
export default connect()(Navbar)