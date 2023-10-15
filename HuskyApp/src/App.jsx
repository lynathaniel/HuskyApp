import React from 'react';
import { useState } from 'react'
import { SignIn } from "./components/SignIn";
import { Demo } from "./components/Demo";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <main>
      <div className="main">
        <div className="app">
          <SignIn />
        </div>
      </div>
    </main>
  )
}

export default App