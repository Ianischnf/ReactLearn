// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
  function Cube(props){

    let numbers = props.Arthur;
  
  
  return (
    <section>
        <h1>Liste des cubes</h1>
        <ul>
            {numbers.map(n => <li>{n} : {n **3}</li>)}
           
        </ul>
    </section>

  )
}

export default Cube
