import styled from 'styled-components'
import TableHead from './Table/Tablehead'
import TableBody from './Table/Tablebody'
import Navbar from '../Header/Navbar'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import Lastedit from '../LastEdit/LastEdit'
import Userlist from '../Userlists/Userlist'

const Main = () => {
    return(
        <>
        <Navbar/>
            <MainWrapper>
                <LeftSidebar/>
                <Container>
                    <TableHead/>
                    <TableBody/>
                </Container>
                <RightSidebar/>
            </MainWrapper>
            <Lastedit/>
        </>
    )
}
const Container = styled.div`
    background-color:green;
    height:60vh;
    width:60%;
`
const MainWrapper = styled.div`
  display:flex;
`
export default Main