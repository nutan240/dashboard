import React from 'react'
import Sidenavbar from './Sidenavbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from '../pages/About';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Analytics from '../pages/Analytics';
import Tradingchart from '../pages/Tradingchart';
import Products from '../pages/Products';
function MainApp() {
  return (
    <>
     <Router>
     <Routes>

    
     <Route path="/" element={<Home/>} />
     <Route path="/setting" element={<Settings/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/analytics" element={<Analytics/>} />
     <Route path="/trading" element={<Tradingchart/>} />
     <Route path="/product" element={<Products/>} />
     </Routes>
     </Router>
        
    </>
  )
}

export default MainApp