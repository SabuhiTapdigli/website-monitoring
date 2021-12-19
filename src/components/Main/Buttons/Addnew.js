import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editedmodeinitialzer } from '../../../Actions/action'

const Addnew = () =>{
    const dispatch = useDispatch()
    const addnewhandler = () => {
        dispatch(editedmodeinitialzer(true))
    }
    return(
        <Btnwrapper>
            <Button type='button' onClick={addnewhandler}>Add New</Button>
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