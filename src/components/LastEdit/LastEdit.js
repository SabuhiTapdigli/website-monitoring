import {useEffect,useState} from 'react'
import React from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import { getlogInitiate } from '../../Actions/logging'
const Lastedit = () =>{
    const {logdata} = useSelector(state=>state.log)
    const memo = React.memo(() =>{
        let obj ={}
        logdata.map((item)=>{
            if(item.actiontype === 'edited'){
                obj[item.id]=false
            }
        })
        return obj
    })
    const [tog,settog] = useState({})
    
    
    console.log('obj before return',memo)
    // console.log('tog before return',tog)
    const Loghandler = (id) =>{
        memo[id] = !memo[id]
        console.log('obj clicked',memo)
        settog({memo})
        console.log('tog when clicked',tog)
    }
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getlogInitiate())
    },[])
    return(
        <Container>
            <Edit>
                {logdata.map((item)=>(
                    item.actiontype === 'edited' ?
                    <div key={item.id}>
                        
                    <li>{item.code} {item.actiontype} {item.owener}  by {item.user} time: {item.time.toDate().toLocaleString()}</li>
                    <button onClick={()=>Loghandler(item.id)}>Show More</button>
                    {/* {obj[item.id]=false} */}
                     {console.log('obj in return',memo)}
                    {/*{console.log('tog after return',tog)} */}
                    <div className={memo[item.id] ? 'show' : 'hide'}>
                       {item.editlogdata.oldcode !== item.editlogdata.newcode && <div>{item.editlogdata.oldcode} changed to {item.editlogdata.newcode}</div>}
                       {item.editlogdata.olddomain !== item.editlogdata.newdomain && <div>{item.editlogdata.olddomain} changed to {item.editlogdata.newdomain}</div>}
                       {item.editlogdata.oldcpanel !== item.editlogdata.newcpanel && <div>{item.editlogdata.oldcpanel} changed to {item.editlogdata.newcpanel}</div>}
                       {item.editlogdata.oldusername !== item.editlogdata.newusername && <div>{item.editlogdata.oldusername} changed to {item.editlogdata.newusername}</div>}
                       {item.editlogdata.oldpassword !== item.editlogdata.newpassword && <div>{item.editlogdata.oldpassword} changed to {item.editlogdata.newpassword}</div>}
                       {item.editlogdata.olddomainExpireDate !== item.editlogdata.newdomainExpireDate && <div>{item.editlogdata.olddomainExpireDate} changed to {item.editlogdata.newdomainExpireDate}</div>}
                       {item.editlogdata.oldhostingExpireDate !== item.editlogdata.newhostingExpireDate && <div>{item.editlogdata.oldhostingExpireDate} changed to {item.editlogdata.newhostingExpireDate}</div>}
                       {item.editlogdata.oldsslExpireDate !== item.editlogdata.newsslExpireDate && <div>{item.editlogdata.oldsslExpireDate} changed to {item.editlogdata.newsslExpireDate}</div>}
                    </div>
                    </div>
                    
                    :
                    <li key={item.id}>{item.code} {item.actiontype} {item.owener}  by {item.user} time: {item.time.toDate().toLocaleString()}</li>
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