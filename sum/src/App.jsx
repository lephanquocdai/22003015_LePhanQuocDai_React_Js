import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [sum, setSum] = useState(0)

  function handlesetA(e){ 
    setA(e. target.value)
  }
  function handlesetB(e){ 
    setB(e. target.value)
  }
  function handleClick() {
    let c = parseInt(a) + parseInt(b)
    setSum(c) ;
  }
  return (
    <>
      <input placeholder='input a' onChange={handlesetA} type='text'/>
      <br/>
      <input placeholder='input b' onChange={handlesetB} type='text'/>
      <br/>
      <button onClick={handleClick}>Click</button> <br/>
      <span>{sum}</span>
     

    </>
  )
}

export default App
