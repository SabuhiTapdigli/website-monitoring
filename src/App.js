import {useEffect} from 'react'
import './index.css'
import Main from './components/Main/Main';
import {Routes,Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserRoute from './components/Auth/UserRoute';
import { useDispatch } from 'react-redux';
import { auth } from './firebaseConfig/fbConfig'
import {setuser, userRole} from './Actions/authaction'
import Userlist from './components/Userlists/Userlist';
import db from './firebaseConfig/fbConfig';
import Scrapped from './Pages/Scrapped';
import Verifyemail from './components/Auth/Verifyemail';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((currentUser)=>{
      if(currentUser){
        dispatch(setuser(currentUser))
        db.collection('user').doc(currentUser.uid).get().then((user)=>{
          dispatch(userRole({...user.data()}))
      })
      }else{
        dispatch(setuser(null))
      }
    })
  },[dispatch])
  
  return (
    <>
     
      <Routes>
          <Route exact path='/' element ={<UserRoute><Main/></UserRoute>}/>
          <Route path='userlist' element ={<UserRoute><Userlist/></UserRoute>}></Route>
          <Route path='scrapped' element ={<UserRoute><Scrapped/></UserRoute>}></Route>
          <Route path='verifyemail' element ={<Verifyemail/>}></Route>
          {/* { currentuser && !currentuser.emailVerified ?
            <Route path='verifyemail' element={<Verifyemail/>}/> : null
          } */}
          
          {/* <Route path='websites' element={<UserRoute><Websites/></UserRoute>}></Route> */}
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          
      </Routes>
  
    </>
  );
}



export default App ;