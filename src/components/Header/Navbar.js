import styled from 'styled-components';
import {connect} from 'react-redux';
import { searchitemInitiate } from '../../Actions/action';
import { useDispatch , useSelector } from 'react-redux'
import { logoutinitiate } from '../../Actions/authaction';

const Navbar = () => {
    const dispatch = useDispatch()
    const {searched} = useSelector(state=>state.data)
    const {currentuser} = useSelector(state=>state.user)
    console.log('currentuser.displayName',currentuser.displayName)
    const searchandler = (e) =>{
        dispatch(searchitemInitiate(e.target.value))
    }
    const logouthandler = (e) =>{
        e.preventDefault()
        dispatch(logoutinitiate())
    }
    return(
        <Nav>
            <Container>
                <Logo>Logo</Logo>
                <Search placeholder='Search' onChange={searchandler} value={searched}></Search>
                <Navlinks>
                    <li><a href='' onClick={logouthandler}>Logout</a></li>
                    <li>{currentuser.displayName}</li>
                    <li><a href='#'>Settings</a></li>
                </Navlinks>
            </Container>
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