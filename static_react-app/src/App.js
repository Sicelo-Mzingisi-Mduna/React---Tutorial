import './App.css';
import React from 'react';
import { useState, useMemo } from 'react';


function App() {

  
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number)}, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  
  function slowFunction(number){
    console.log("Calling slow function");
    for(let i = 0; i < 10000000; i++){

    }
    return number * 2
  }

  return(

    <>
      <div>
      <input type = "number" value = {number} onChange = {(e) => setNumber(parseInt (e.target.value))} ></input>
      </div>
      <button onClick = {() => setDark(prev_dark => !prev_dark)}> Change Theme</button>
      <div style = {themeStyles}>{doubleNumber}</div>
    </>


  )

  
}

export default App;
