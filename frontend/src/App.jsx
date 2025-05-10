import {Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import './App.css'
import  {Toaster} from "react-hot-toast"
// eslint-disable-next-line no-unused-vars
import Login from "./pages/login/Login"
// eslint-disable-next-line no-unused-vars
import SignUp from './pages/signUp/SignUp'
import Home from './pages/home/Home'
import { useAuthContext } from './context/AuthContext'


function App() {

  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
    </Routes>
    <Toaster/>
      
    </div>
  )
}

export default App
