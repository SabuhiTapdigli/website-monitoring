import styled from 'styled-components';
import { editedmodeinitialzer } from '../../../Actions/action'
import {useDispatch, useSelector} from 'react-redux'

const Addnew = () =>{
    const dispatch = useDispatch()
    const {role} = useSelector(state =>state.user)
    
    const addnewhandler = () => {
        dispatch(editedmodeinitialzer(true))
    }
    const askpermision = () =>{
        alert("You can't do any action, Please ask admin permission")
    }
    return(
        <Btnwrapper>
            {role && role.role ==='admin' ? <Button type='button' onClick={addnewhandler}>Add New</Button>
            : <Button type='button' onClick={askpermision}>Add New</Button>} 
            
        </Btnwrapper>
        
    )
}
const Btnwrapper = styled.div`
    display:flex;
    justify-content:end;
    padding:10px;
`
const Button = styled.button`
    padding:10px;
    background-color:red;
    border:none;
    color:white;
    cursor:pointer;
`
export default Addnew