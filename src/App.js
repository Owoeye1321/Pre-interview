import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/login'
import Dashboard from './Components/dashboard';
import SignUp from './Components/signup';
import Forgetpassword from './Components/forgetPassword';
import './App.css';

function App() {
  return (
    <>
       
    <Router> 
      
        <Routes>

        <Route exact path = '/' element = {<Dashboard />}/>
        <Route exact path = '/login' element = {<Login />}/>
        <Route exact path = '/signup' element = {<SignUp />}/>
        <Route exact path = '/forgetpassword' element = {<Forgetpassword />}/>

   

        </Routes>

    </Router>
 
    </>   
  ) 
}

export default App;
