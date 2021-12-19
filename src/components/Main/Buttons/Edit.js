import styled from 'styled-components';

const Edit = () =>{
    return(
        <Btnwrapper>
            <Button type='button'>Edit</Button>
        </Btnwrapper>
        
    )
}
const Btnwrapper = styled.div`
    display:flex;
    justify-content:end;
    padding:1px;
    width:4%;
`
const Button = styled.button`
    padding:2px;
    background-color:red;
    border:none;
    color:white;
    cursor:pointer;
`
export default Edit