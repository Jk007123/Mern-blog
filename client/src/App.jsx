
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Signin" element={< Signin />} />
        <Route path="/Signup" element={< Signup />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Projects" element={<Projects/>} />


      </Routes>
    
    
    </BrowserRouter>
  )
}
