import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {

  
  const [resourceType, setResourceType] = useState("post");

  return(

    <>

      <div>
      <button onClick = {() => setResourceType("Posts")}> Posts </button>
      <button onClick = {() => setResourceType("Users")}> Users </button>
      <button onClick = {() => setResourceType("Comments")}> Comments </button>
      </div>

      <h1> {resourceType} </h1>

      
    
    
    </>

  )

  
}

export default App;
