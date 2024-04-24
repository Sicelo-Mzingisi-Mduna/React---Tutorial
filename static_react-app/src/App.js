
import './App.css';
import Employee from './components/Employee'  

function App() {

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
        <Employee Tile = "Sales" Name = "Sicelo" ></Employee> 

      : <p> You cannot see the Employee</p>
      
      }
      
      
    </div>
  );
}

export default App;
