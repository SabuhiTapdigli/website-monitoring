import {useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { getlogInitiate, geteditlogInitiate } from '../../Actions/logging'
const Lastedit = () =>{
    const {logdata,editlog} = useSelector(state=>state.log)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getlogInitiate())
        dispatch(geteditlogInitiate())
    },[])
    return(
        <Container>
            <Edit>
                {logdata.map((item)=>(
                    item.actiontype === 'edited' ?
                    <>
                    <li>{item.code} {item.actiontype} {item.owener}  by {item.user} time: {item.time.toDate().toLocaleString()}</li>
                    <span>||</span>
                    <div>{editlog.map((edit)=>(
                        // edit.code === item.code ? <span>edit</span> : edit
                        console.log('edit.code===item.code',edit.code)
                    ))}</div>
                    </>
                    :
                    <li>{item.code} {item.actiontype} {item.owener}  by {item.user} time: {item.time.toDate().toLocaleString()}</li>
                )
                )}
            </Edit>
        </Container>
    )
}
const Container = styled.div`
    background-color:purple;
    height:25vh;
    text-align:center;
    color:white;
    overflow: scroll;
`
const Edit = styled.ul`
    li{
        padding-top:10px;
    }

`
export default Lastedit