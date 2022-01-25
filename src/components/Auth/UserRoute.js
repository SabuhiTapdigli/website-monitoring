import {Navigate} from  'react-router-dom';
import {useSelector} from 'react-redux'
const UserRoute = ({children}) =>{
    const {currentuser} = useSelector(state =>state.user)
    if(currentuser && currentuser.emailVerified){
        return children
    }
    else if( currentuser && !currentuser.emailVerified ){
        return <Navigate to='/verifyemail'/>
    }
    else{
        return <Navigate to='/login'/>
    }
    
    // return currentuser.emailVerified ? children : <Navigate to='/verifyemail'/>
}
export default UserRoute