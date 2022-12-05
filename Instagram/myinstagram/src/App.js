
import './App.css';
import Home from './components/HomePage/Home';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      {
        (localStorage.getItem("users")==undefined || localStorage.getItem("users")==null) ?
        <LoginPage/> : <Home/>
      }
     
      
      {/* <Home/>      */}
    </div>
  );
}

export default App;
