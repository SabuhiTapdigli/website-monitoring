import styled from 'styled-components'

const Lastedit = () =>{
    return(
        <Container>
            <Edit>
                <li>Parvin edited hosting name on Ca61 </li>
                <li>Sabuhi deleted Fi85 account</li>
            </Edit>
        </Container>
    )
}
const Container = styled.div`
    background-color:purple;
    height:15vh;
    text-align:center;
    color:white;
`
const Edit = styled.ul`
    li{
        padding-top:10px;
    }

`
export default Lastedit