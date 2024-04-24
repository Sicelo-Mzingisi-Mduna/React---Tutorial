import './App.css';
import Employee from './components/Employee'
import {useState} from 'react'

function App() {

  const showEmployees = true;
  const [Name, setName] = useState('Sicelo');
  return (
    <div className="App">
      {showEmployees ?
      
        <>
          <input type="text" onChange = 
          {(e) => 
            {
              console.log(e.target.value)
              setName(e.target.value)
            }
          }
          /> 
          <Employee Tile = "Sales" Name = {Name} ></Employee>

        </>

      : <>
          <p> You cannot see the Employee</p>
        </>
      

      }
      
      
    </div>
  );
}

export default App;
