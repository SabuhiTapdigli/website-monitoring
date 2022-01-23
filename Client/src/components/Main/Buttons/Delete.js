import styled from 'styled-components';

const Delete = ({Deletehandler,id}) =>{
    return(
        <Btnwrapper>
            <Button type='button' onClick={()=> Deletehandler(id)}>Del</Button>
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
    padding:4px;
    background-color:red;
    border:none;
    color:white;
    cursor:pointer;
`
export default Delete