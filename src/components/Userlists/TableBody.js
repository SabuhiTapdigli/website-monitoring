import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { userlistInitiate } from '../../Actions/menuAction';

const TableBody = () =>{
    const dispatch = useDispatch();
    const {userlist} = useSelector(state=>state.menu)
    useEffect(()=>{
         dispatch(userlistInitiate())
    },[])
    return(
        <>
            <Body>
                {userlist.map((user)=>{
                    return(
                        <Container>
                            <div>{user.uid}</div>
                            <div>{user.mail}</div>
                            <div>{user.role}</div>
                        </Container>
                    )
                })}
                
            </Body>
        </>
    )
}
const Body = styled.div`
    display:flex;
    background-color:green;
    justify-content:space-between;
    text-align:center;
    flex-direction:column;

`
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
`
export default TableBody