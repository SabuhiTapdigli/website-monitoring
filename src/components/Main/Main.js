import styled from 'styled-components'
import TableHead from './Table/Tablehead'
import TableBody from './Table/Tablebody'

const Main = ({search}) => {
    return(
        <Container>
            <TableHead/>
            <TableBody search={search}/>
        </Container>
    )
}
const Container = styled.div`
    background-color:green;
    height:60vh;
    width:60%;
`
export default Main