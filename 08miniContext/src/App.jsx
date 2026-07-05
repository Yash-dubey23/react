import { useState } from 'react'
import './App.css'
import UserContetProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profilr'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContetProvider>
      <h1>Yash</h1>
      <Login/>
      <Profile/>
    </UserContetProvider>
  )
}

export default App
