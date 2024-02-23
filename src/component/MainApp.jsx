import React from 'react'
import Sidenavbar from './Sidenavbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from '../pages/About';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
function MainApp() {
  return (
    <>
     <Router>
     <Routes>

    
     <Route path="/" element={<Home/>} />
     <Route path="/setting" element={<Settings/>} />
     <Route path="/about" element={<About/>} />
     </Routes>
     </Router>
        
    </>
  )
}

export default MainApp