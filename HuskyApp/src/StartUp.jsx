import React, {useState } from 'react';
import { SignIn } from "./components/SignIn";
import { App } from "./components/App";
//import { HomePage } from "./components/HomePage";
// import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

const StartUp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* Other routes go here */}
        <Route path="/App" element={<App />} />
        {/* <Route path="/HomePage" element={<HomePage />} /> */}
      </Routes>
    </Router>
  )
}

export default StartUp