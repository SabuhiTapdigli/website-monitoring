import styled from 'styled-components';

const LeftSidebar = () =>{
    return(
        <Sidebar>
            <Nav>
                <li><a hred=''>Websites</a></li>
                <li><a hred=''>Scrapped</a></li>
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

