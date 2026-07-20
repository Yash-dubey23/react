import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // console.log(Process.env.REACT_APP_APPWRITE_URL)
  console.log(import .meta.env.VITE_APPWRITE_URL)
  const [count, setCount] = useState(0)

  return (
  <h1>A blog with appwrite
  </h1>
  )
}

export default App
