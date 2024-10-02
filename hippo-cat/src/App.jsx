import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headbar from './Components/Headbar'

import Contract from './Components/Contract'
import Hero from './Components/Hero'
import Tokeneconomics from './Components/Tokeneconomics'
import About from './Components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headbar></Headbar>

      <Hero />
      <Contract />
      <Tokeneconomics />
      <About/>

    </>
  )
}

export default App
