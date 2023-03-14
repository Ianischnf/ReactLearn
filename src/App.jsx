import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const MESSAGES = [
    { message : "React JS" },
    { message : "React Native" },
    { message : "Angular" },
    { message : "Symfony" },
    { message : "MongoDB" },
];
  return (
    <div className="App">
        <h1>Hello !</h1>
        <p>Bienvenue sur cette page avec React</p>
       
       
    </div>
  )
}

export default App
