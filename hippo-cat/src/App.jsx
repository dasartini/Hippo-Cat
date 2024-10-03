import { useState } from 'react'
import './App.css'
import Headbar from './Components/Headbar'

import Contract from './Components/Contract'
import Hero from './Components/Hero'
import Tokeneconomics from './Components/Tokeneconomics'
import About from './Components/About'
import Partners from './Components/Partners'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headbar></Headbar>

      <Hero />
      <Contract />
      <Tokeneconomics />
      <About/>
<Partners/>
    </>
  )
}

export default App
