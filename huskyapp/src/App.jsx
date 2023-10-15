import React from 'react';
import { useState } from 'react'
import { SignIn } from "./components/SignIn";
import { Test } from "./components/Test";
import { HomePage } from "./components/HomePage";
//import { HomePage } from "./components/HomePage";
// import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* Other routes go here */}
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/HomePage" element={<HomePage />} /> */}
      </Routes>
  </Router>
  )
}

export default App