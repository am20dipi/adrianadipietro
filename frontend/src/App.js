import Navbar from './Navbar.js'
import Home from './Home.js'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>ADRIANA DIPIETRO</h1>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
