import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Blog from './Blog'
import Resume from './Resume'
import Projects from './Projects'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
