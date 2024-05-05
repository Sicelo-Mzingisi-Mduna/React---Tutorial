import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {

  const [count, setCount] = useState(0)

  function decrementCount(){

    setCount(prev_count => prev_count - 1)
  }

  function incrementCount(){

    setCount(prev_count => prev_count + 1)
  }
  return(

    <>

      <button onClick = {decrementCount}> - </button>
      <span> {count} </span>
      <button onClick = {incrementCount}> + </button>
    
    
    </>

  )

  
}

export default App;
