import {useState} from 'react'
import styled from 'styled-components';
import './index.css'
import Main from './components/Main/Main';
import {connect} from 'react-redux';
import { BrowserRouter,Routes,
  Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


function App(props) {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='' element ={<Main/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}


const mapStateProps = state =>{
    return{
      items:state.items
    }
}
export default connect(mapStateProps)(App) ;
