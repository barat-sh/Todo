
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Login} from "./pages/Login"
import {Demo} from "./pages/Demo";
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Me } from './pages/Me';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/:id' element={<Me/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App