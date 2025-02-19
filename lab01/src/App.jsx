import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [name, setName] = useState('');
    function handleAssign (e) {
      setText(e. target.value);
    }
    function handleClick(){
      setName(text);
    }

  return (
    <>
      <input onChange={handleAssign} type="text" />
      <button onClick={handleClick} >Click</ button>
      <span>{name}</span>
     
    </>
  )
}

export default App
