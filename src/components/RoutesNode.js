import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layouts/Home';
import About from './layouts/About';
import ContactUs from './layouts/ContactUs';
import Servies from './layouts/Servies';

const RoutesNode = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contactUs" element={<ContactUs/>}></Route>
        <Route path="/Servies" element={<Servies/>}></Route>
      </Routes>
    </div>
  )
}

export default RoutesNode;
