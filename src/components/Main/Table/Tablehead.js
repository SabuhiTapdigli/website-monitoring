import styled from 'styled-components';
import Addnew from '../Buttons/Addnew'

const TableHead = () =>{
    
    return(
        <>
            <Addnew/>
            <Head>
                <div style={{width:'2.5%'}}>Id</div>
                <div style={{width:'7.5%'}}>Code</div>
                <div style={{width:'20%'}}>Domain</div>
                <div style={{width:'20%'}}>Cpanel</div>
                <div style={{width:'12.5%'}}>Username</div>
                <div style={{width:'12.5%'}}>Password</div>
                <div style={{width:'10%'}}>Owner</div>
                <div style={{width:'4%'}}>Delete</div>
                <div style={{width:'4%'}}>Edit</div>
                <div style={{width:'4%'}}>Copy</div>
            </Head>
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
        font-size:15px;
    }
`
export default TableHead