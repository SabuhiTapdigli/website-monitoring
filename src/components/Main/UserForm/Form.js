import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { editedmodeinitialzer } from '../../../Actions/action'


const Form = ({onchangehandler,submitHandler,input,setinput,seteditmode}) =>{
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
    const closehandler = () => {
        dispatch(editedmodeinitialzer(false))
        seteditmode(false)
        setinput(initialstate)
    }
    const {code,domain,cpanel,username,password,owner,domainExpireDate,hostingExpireDate,sslExpireDate} = input || {};
  
    return(
        <>
            <Container>
                <div onClick={closehandler}>X</div>
            <form onSubmit={submitHandler}>
                <label>Code</label>
                <input name = 'code' id='code' value={code || ''} onChange={onchangehandler} />
                <label>Domain</label>
                <input name = 'domain' id='domain' value={domain || ''} onChange={onchangehandler}/>
                <label>Cpanel</label>
                <input name = 'cpanel' id='cpanel' value={cpanel || ''} onChange={onchangehandler} />
                <label>Username</label>
                <input name = 'username' id='username' value={username || ''} onChange={onchangehandler}/>
                <label>Password</label>
                <input name = 'password' id='password' value={password || ''} onChange={onchangehandler}/>
                <label>Domain Expire Data</label>
                <input name = 'domainExpireDate' id='domainExpireDate' type='date' value={domainExpireDate || ''} onChange={onchangehandler}/>
                <label>Hosting Expire Data</label>
                <input name = 'hostingExpireDate' id='hostingExpireDate' type='date' value={hostingExpireDate || ''} onChange={onchangehandler}/>
                <label>SSL Expire Data</label>
                <input name = 'sslExpireDate' id='sslExpireDate' type='date' value={sslExpireDate || ''} onChange={onchangehandler}/>
                <label>Owner</label>
                <input name = 'owner' id='owner' value={owner || ''} onChange={onchangehandler}/>
                <button type='submit'>Send</button>
            </form>

            </Container>
        </>
    )
}
const Container = styled.div`
    div{
        color:white;
        float:right;
        padding-right:10px;
        cursor:pointer;
        
    }
    background-color:gray;
    margin-top:-100px;
    position:relative;
    z-index:1;
    form{
        display:flex;
        flex-direction:column;
        width:50%;
        margin:auto;
    }
    input{
        height:30px;
    }
    button{
        height:25px;
        width:100px;
        margin:auto;
        background-color:red;
        margin-top:10px;
    }

`
export default Form