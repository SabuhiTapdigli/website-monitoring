import styled from 'styled-components';
import {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getmenuInitiate} from '../../Actions/menuAction'
import {Link} from 'react-router-dom'

    
const LeftSidebar = () =>{
    const dispatch = useDispatch();
    const {links} = useSelector(state=>state.menu)
    const {role} = useSelector(state=>state.user)
    useEffect(()=>{
        dispatch(getmenuInitiate())
    },[])
    return(
        <Sidebar>
            
            <Nav>
            {links.map((link)=>{
                return(<li key={link.id}><Link to={`/${link.menu}`}>{role && role.role === 'admin' ? link.menu :null}</Link></li>)
            })}
    
                
            </Nav>
        </Sidebar>
    )
}
const Sidebar = styled.div`
    width:20%;
    background-color:yellow;
    height:60vh;
`
const Nav = styled.ul`
    li{
        list-style:none;
        padding:15px;
    }
    a{
        text-decoration:none;
        color:black;
    }
`
export default LeftSidebar

