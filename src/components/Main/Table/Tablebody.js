import {useState,useEffect} from 'react';
import styled from 'styled-components';
import Form from '../UserForm/Form'
import Delete from '../Buttons/Delete';
import Edit from '../Buttons/Edit';
import Copy from '../Buttons/Copy';
import {connect} from 'react-redux';
import { Pagination } from 'antd'
import { useDispatch , useSelector } from 'react-redux'
import { additemInitiate, getitemsInitiate, deleteitemInitiate, edititemInitiate,updateitemInitiate,deleteitemAllInitiate, copyitemInitiate,editedmodeinitialzer} from '../../../Actions/action';
// import { editedmodeinitialzer } from '../../../Actions/simpleaction'


const TableBody = (props) =>{
 
    const {data,website,searchdata,hide} = useSelector(state=>state.data)
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
   
    const onchangehandler = (event) =>{
        setinput({...input,[event.target.id]:event.target.value})
    }
    const submitHandler = (e) =>{   
        e.preventDefault()
        if(!editmode){
            dispatch(additemInitiate(input))
            setinput({code:'',domain: '',cpanel : '',username: '',password : '',owner: '',domainExpireDate:'',hostingExpireDate:'' , 
            sslExpireDate:''})
        }else{
            dispatch(updateitemInitiate(websiteid,input))
            setwebsiteid(null);
            editedmodeinitialzer(false);
            setinput({code:'',domain: '',cpanel : '',username: '',password : '',owner: '',omainExpireDate:'',hostingExpireDate:'' , 
            sslExpireDate:''})
        }
        
    }
    const deletehandler = (id) =>{
        if(window.confirm('are you sure?')){
            dispatch(deleteitemInitiate(id))
        }
    }
    const edithandler = (id) =>{
        dispatch(edititemInitiate(id))
        seteditmode(true)
        setwebsiteid(id)
    }
    const copyhandler = (copieditemdata) =>{
        dispatch(copyitemInitiate(copieditemdata))
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

   
    return(
        
        <>
         <button onClick={()=>deleteall(radio)}>Del All</button>
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
                            <button onClick={()=>deletehandler(item.id)}>Del</button>
                            {/* <Edit/> */}
                            <button onClick={()=>copyhandler(item)}>Copy</button>
                            <button onClick={()=>edithandler(item.id)}>Edit</button>
                            {/* <Copy  Copyhandler={Copyhandler} id = {item.id}/> */}
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