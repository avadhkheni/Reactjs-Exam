import { useState } from 'react'
import './App.css'
import SignIn from './Components/SignIn'
import { Route,Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Show from './Components/Show'
import ResetPassword from './Components/ResetPassword'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/show' element={<Show/>} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
        </Routes>
    </>
  )
}

export default App