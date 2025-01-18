import {Routes,Route} from 'react-router-dom'
import './App.css'
import  {Toaster} from "react-hot-toast"
// eslint-disable-next-line no-unused-vars
import Login from "./pages/login/Login"
// eslint-disable-next-line no-unused-vars
import SignUp from './pages/signUp/SignUp'
import Home from './pages/home/Home'


function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/signup' element = {<SignUp/>} />
    </Routes>
    <Toaster/>
      
    </div>
  )
}

export default App
