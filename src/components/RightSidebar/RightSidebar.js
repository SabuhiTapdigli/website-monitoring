import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const RightSidebar = () =>{
    const { data } = useSelector (state => state.data)
    const currentdate = new Date()
   
    return(
        <Sidebar>
            <h1>Will expire in 2 days</h1>
            <Nav>
                {data.map((item) => {
                    return(
                        <>
                        
                        {Math.round((new Date() - new Date(item.domainExpireDate))/(1000*3600*24))>=-2 
                        ? <li><a hred=''>{`${item.domainExpireDate} ${item.code} domain`}</a></li> : null}
                        {Math.round((new Date() - new Date(item.hostingExpireDate))/(1000*3600*24))>=-2 
                        ?  <li><a hred=''>{`${item.hostingExpireDate} ${item.code} hosting`}</a></li> : null}
                        {Math.round((new Date() - new Date(item.sslExpireDate))/(1000*3600*24))>=-2 
                        ? <li><a hred=''>{`${item.sslExpireDate} ${item.code} ssl`}</a></li> : null}
                        </>
                    )
                    
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
    text-align:center;
    margin-top:20px;
    li{
        list-style:none;
        // padding:15px;
    }
    a{
        text-decoration:none;
        color:red;
    }
`

export default RightSidebar