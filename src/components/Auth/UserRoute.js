import {Outlet,Navigate} from  'react-router-dom';
import {useSelector} from 'react-redux'
const UserRoute = ({children}) =>{
    // const history  = useNavigate()
    const {currentuser} = useSelector(state =>state.user)
    return currentuser ? children : <Navigate to='/login'/>
}
export default UserRoute