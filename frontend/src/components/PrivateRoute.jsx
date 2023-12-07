import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../pages/Loader'

const PrivateRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const id = currentUser ? currentUser.id : null;

  if (id === null) {
    return <Loader/>
  }
  return id ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute