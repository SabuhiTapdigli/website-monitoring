import styled from 'styled-components'
import TableHead from '../Userlists/TableHead'
import TableBody from '../Userlists/TableBody'
import Navbar from '../Header/Navbar'
import LeftSidebar from '../LeftSidebar/LeftSidebar'


const Userlist = () =>{
  
    return(
        <>
            <Navbar/>
            <Container>
                <LeftSidebar/>
                <Table>
                    <TableHead/>
                    <TableBody/>
                </Table>
            </Container>
        </>
    )
}
const Table = styled.div`
    width:50%
`
const Container = styled.div `
    display:flex;
`
export default Userlist