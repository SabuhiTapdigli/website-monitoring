import {useEffect} from 'react'
import styled from 'styled-components';
import './index.css'
import Main from './components/Main/Main';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserRoute from './components/Auth/UserRoute';
import { useDispatch } from 'react-redux';
import { auth } from './firebaseConfig/fbConfig'
import {setuser} from './Actions/authaction'
import Userlist from './components/Userlists/Userlist';
import db from './firebaseConfig/fbConfig'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((currentUser)=>{
      if(currentUser){
        dispatch(setuser(currentUser))
        db.collection('user').doc(currentUser.uid).get().then((user)=>{
          console.log('userrr',{...user.data()})
      })
      }else{
        dispatch(setuser(null))
      }
    })
  },[dispatch])
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route exact path='/' element ={<UserRoute><Main/></UserRoute>}/>
          <Route path='userlist' element ={<UserRoute><Userlist/></UserRoute>}></Route>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          
      </Routes>
    </BrowserRouter>
    </>
  );
}



export default App ;
