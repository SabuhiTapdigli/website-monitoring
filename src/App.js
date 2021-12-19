import {useState} from 'react'
import styled from 'styled-components';
import Navbar from './components/Header/Navbar';
import './index.css'
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Lastedit from './components/LastEdit/LastEdit';
import {connect} from 'react-redux';



function App(props) {
  const [search, setsearch] = useState('')
  return (
    <>
      <Navbar setsearch={setsearch}/>
      <MainWrapper>
        <LeftSidebar/>
        <Main search={search}/>
        <RightSidebar/>
      </MainWrapper>
      <Lastedit/>
    </>
  );
}

const MainWrapper = styled.div`
  display:flex;
`
const mapStateProps = state =>{
    return{
      items:state.items
    }
}
export default connect(mapStateProps)(App) ;
