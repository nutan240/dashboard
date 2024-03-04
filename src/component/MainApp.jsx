import React from 'react'
import Sidenavbar from './Sidenavbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from '../pages/About';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Analytics from '../pages/Analytics';
import Tradingchart from '../pages/Tradingchart';
import Products from '../pages/Products';
import Demo from '../pages/Demo';
import Logiin from './Login';
import Signup from './Signup';
import Phonelogin from './Phonelogin';
function MainApp() {
  return (
    <>
     <Router>
     <Routes>

    
     <Route path="/" element={<Logiin/>} />
     <Route path="/signup" element={<Signup/>} />
     <Route path="/phone" element={<Phonelogin/>} />

     <Route path="/home" element={<Home/>} />
     <Route path="/setting" element={<Settings/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/analytics" element={<Analytics/>} />
     <Route path="/trading" element={<Tradingchart/>} />
     <Route path="/product" element={<Products/>} />
     <Route path="/demo" element={<Demo/>} />
     </Routes>
     </Router>
        
    </>
  )
}

export default MainApp