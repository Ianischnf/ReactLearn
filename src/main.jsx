import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Cube from './components/Cube';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cube Arthur={[2, 4, 6]}/>
    <Cube Arthur={[2, 4, 6]}/>
    <Cube Arthur={[2, 4, 6]}/>
  </React.StrictMode>,
)
