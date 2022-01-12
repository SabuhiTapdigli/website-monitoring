import {useState,useEffect} from 'react';
import styled from 'styled-components';
import Form from '../UserForm/Form'
import { Pagination } from 'antd'
import { useDispatch , useSelector } from 'react-redux'
import { additemInitiate, getitemsInitiate, deleteitemInitiate, edititemInitiate,updateitemInitiate,deleteitemAllInitiate, copyitemInitiate,editedmodeinitialzer} from '../../../Actions/action';
import { addlogInitiate, actionlogInitiate, editlogInitiate } from '../../../Actions/logging';


const TableBody = (props) =>{
 
    const {website,searchdata,hide} = useSelector(state=>state.data)
    const {role} = useSelector(state => state.user) 
    // pagination
    const total = searchdata.length
    const [page,setPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(10)
    const indexofLastPage = page * postPerPage
    const indexofFirstPage = indexofLastPage - postPerPage
    const CurrentPosts = searchdata.slice(indexofFirstPage,indexofLastPage)

    const onShowSizeChange = (current, pageSize) => {
        setPostPerPage(pageSize)
    }
    const itemRender = (current , type , orginialElement) =>{
        if(type === 'prev'){
            return <a>Previous</a>
        }
        if(type === 'next') {
            return <a>Next</a>
        }
        return orginialElement
    }
    // end pagination

    const [websiteid, setwebsiteid] = useState(null)
    const [radio, setradio] = useState([])
    const [editmode,seteditmode] = useState(false)
    const dispatch = useDispatch()
    const initialstate = {
    code:'',
    domain: '',
    cpanel : '',
    username: '',
    password : '',
    owner: '',
    domainExpireDate:'',
    hostingExpireDate:'',
    sslExpireDate:''
}
    
    const [input,setinput] = useState(initialstate)
    const datas = {
        user:role && role.mail,
        userid:role && role.uid,
        actiontype :'added',
        code: input.code,
        time: new Date()
    }
    const onchangehandler = (event) =>{
        setinput({...input,[event.target.id]:event.target.value})
    }
    
    
    const submitHandler = (e) =>{   
        e.preventDefault()
        if(!editmode){
            dispatch(additemInitiate(input))
            setinput({code:'',domain: '',cpanel : '',username: '',password : '',owner: '',domainExpireDate:'',hostingExpireDate:'' , 
            sslExpireDate:''})
            dispatch(addlogInitiate(datas))
        }else{
            const editlogdata = {
                ...(website.owner !== input.owner) && {owner: {newowner:input.owner,oldowner:website.owner}},
                ...(website.code !== input.code) && {code: {newcode:input.code,oldcode:website.code}},
                ...(website.domain !== input.domain) && {domain: {newdomain:input.domain,olddomain:website.domain}},
                ...(website.cpanel !== input.cpanel) && {cpanel: {newcpanel:input.cpanel,oldcpanel:website.cpanel}},
                ...(website.domainExpireDate !== input.domainExpireDate) && {domainExpireDate:{newdomainExpireDate: input.domainExpireDate,
                                                                             olddomainExpireDate:website.domainExpireDate}},
                ...(website.hostingExpireDate !== input.hostingExpireDate) && {hostingExpireDate:{newhostingExpireDate: input.hostingExpireDate,
                                                                             oldhostingExpireDate:website.hostingExpireDate}},
                ...(website.sslExpireDate !== input.sslExpireDate) && {sslExpireDate:{newsslExpireDate: input.sslExpireDate,
                                                                             oldsslExpireDate:website.sslExpireDate}},
                actiontype:'Edited',
                user:role && role.mail
            }
            dispatch(updateitemInitiate(websiteid,input))
            dispatch(actionlogInitiate({code:input.code,user:role && role.mail,actiontype:'edited',time:new Date()}))
            setwebsiteid(null);
            editedmodeinitialzer(false);
            setinput({code:'',domain: '',cpanel : '',username: '',password : '',owner: '',omainExpireDate:'',hostingExpireDate:'' , 
            sslExpireDate:''})
        }
        
    }
    const deletehandler = (item) =>{
        if(window.confirm('are you sure?')){
            dispatch(deleteitemInitiate(item.id))
            dispatch(actionlogInitiate({code:item.code,user:role && role.mail,actiontype:'deleted',time:new Date()}))
        }
    }
    const edithandler = (id) =>{
        dispatch(edititemInitiate(id))
        seteditmode(true)
        setwebsiteid(id)
    }
    const copyhandler = (copieditemdata) =>{
        dispatch(copyitemInitiate(copieditemdata))
        dispatch(actionlogInitiate({code:copieditemdata.code,user:role && role.mail,actiontype:'copied',time:new Date()}))
    }
    
    const deleteallhandler = (id) => {
        setradio([...radio,id])
    }
    const deleteall = (radio) =>{
        dispatch(deleteitemAllInitiate(radio))
    }
   
    useEffect(()=>{
        dispatch(getitemsInitiate())
    },[])

    useEffect(()=>{
        if(website){
            setinput({...website})
        }
    },[website])

    const askpermision = () =>{
        alert("You can't do any action, Please ask admin permission")
    }
   
    return(
        
        <>
        {role &&role.role === 'admin'
        ? <button onClick={()=>deleteall(radio)}>Del All</button>
        : <button onClick={()=>askpermision()}>Del All</button>}
         
            {
                
                CurrentPosts && CurrentPosts.map((item)=>{
                    return(
                        <Head key={item.id}>
                            <input type="radio" value="" name="" onClick={()=>deleteallhandler(item.id)} />
                            <div style={{width:'7.5%'}}>{item.code}</div>
                            <div style={{width:'20%'}}>{item.domain}</div>
                            <div style={{width:'20%'}}>{item.cpanel}</div>
                            <div style={{width:'12.5%'}}>{item.username}</div>
                            <div style={{width:'12.5%'}}>{item.password}</div>
                            <div style={{width:'10%'}}>{item.owner}</div>
                            {role && role.role === 'admin' 
                            ?
                            <>
                            <button onClick={()=>deletehandler(item)}>Del</button>
                            <button onClick={()=>copyhandler(item)}>Copy</button>
                            <button onClick={()=>edithandler(item.id)}>Edit</button>
                            </>
                            :
                            <>
                            <button onClick={()=>askpermision()}>Del</button>
                            <button onClick={()=>askpermision()}>Copy</button>
                            <button onClick={()=>askpermision()}>Edit</button>
                            </>
                    }
                        </Head>
                    )
                })
                
            }
            {
                hide || editmode ? <Form onchangehandler={onchangehandler} submitHandler={submitHandler} setinput={setinput} input={input} seteditmode={seteditmode}/> : null
            }
            <Pagination onChange = {(value) => setPage(value)} 
            pageSize={postPerPage} 
            total = {total} 
            current = {page}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={onShowSizeChange}
            itemRender={itemRender}
           
                 />
        </>
    )
}
const Head = styled.div`
    display:flex;
    justify-content:space-between;
    color:white;
    margin-bottom:10px;
    div{
        text-align:center;
    }
`
// const mapStateprops = state =>{
//     return{
//         items:state.items
//     }
    
// }
// ---- same with inside currly brackets
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         Fetchdata: (item) => dispatch(Fetchdata(item))
//     }
// }
export default connect()(TableBody)