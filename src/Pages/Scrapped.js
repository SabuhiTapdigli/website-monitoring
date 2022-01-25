import { Header } from "antd/lib/layout/layout"
import Navbar from "../components/Header/Navbar"
import styled from 'styled-components'
import LeftSidebar from "../components/LeftSidebar/LeftSidebar"
import TableHead from "../components/Main/Table/Tablehead"
import Tablebody from "../components/Main/Table/Tablebody"
import RightSidebar from "../components/RightSidebar/RightSidebar"
import Lastedit from "../components/LastEdit/LastEdit"

const Scrapped = () =>{
    return(
        <>
        <Navbar/>
        <MainWrapper>
                <LeftSidebar/>
                <Container>
                   
                   <h1>Scrapped</h1>
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

export default Scrapped