import { useState } from 'react'
import styled from 'styled-components';
import "antd/dist/antd.css";
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd'
import Setting from '../Settings/Setting';
const RightSidebar = () =>{
    const { data } = useSelector (state => state.data)
    const total = data.length
    const [page,setPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(10)
    const indexofLastPage = page * postPerPage
    const indexofFirstPage = indexofLastPage - postPerPage
    const CurrentPosts = data.slice(indexofFirstPage,indexofLastPage)
    const currentdate = new Date()
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
    return(
        <>
        <Sidebar>
            <h1>Will expire in 2 days</h1>
            <Nav>
                {CurrentPosts.map((item) => {
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
                <Pagination onChange = {(value) => setPage(value)}
                 pageSize={postPerPage} 
                 total = {total} 
                 current = {page}
                 showSizeChanger
                 showQuickJumper
                 onShowSizeChange={onShowSizeChange}
                 itemRender={itemRender}/>
            </Nav>
        </Sidebar>
        <Setting/>
        </>
    )
}

const Sidebar = styled.div`
    width:20%;
    background-color:yellow;
    // height:60vh;
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