
import { Form, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import {Home, About, Contact,Projects} from "./index";
import Loader from "./Component/Loader.jsx";
function App(){
  return (
    <>
      <main className="fixed top-0  bg-transparent  p-4 z-50"> 
        <Router>
          <Navbar/>
        
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </main>
      <div>
        <Loader />
      </div>
    </>
  )
}

export default App
