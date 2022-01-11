import {useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { getlogInitiate } from '../../Actions/logging'
const Lastedit = () =>{
    const {logdata} = useSelector(state=>state.log)
    const dispatch = useDispatch()
    console.log('logdata',logdata)
    useEffect(()=>{
        dispatch(getlogInitiate())
    },[])
    return(
        <Container>
            <Edit>
                {logdata.map((item)=>(
                    <li>{item.code} {item.actiontype} by {item.user}  </li>
                )
                )}
            </Edit>
        </Container>
    )
}
const Container = styled.div`
    background-color:purple;
    height:15vh;
    text-align:center;
    color:white;
`
const Edit = styled.ul`
    li{
        padding-top:10px;
    }

`
export default Lastedit