
import './App.css';
import Employee from './components/Employee'  

function App() {

  const showEmployees = false;
  return (
    <div className="App">
      {showEmployees ? 
        <Employee></Employee> 

      : <p> You cannot see the Employee</p>
      
      }
      
      
    </div>
  );
}

export default App;
