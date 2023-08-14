
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Login} from "./pages/Login"
import {Demo} from "./pages/Demo";
import { Register } from './pages/Register';
import { Home } from './pages/Home';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
