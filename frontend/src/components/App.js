import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Blog from './Blog'
import Resume from './Resume'
import Projects from './Projects'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])


  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
      </BrowserRouter>
      <div className="parallax" 
      style={{transform: `translateY(${offsetY * 0.1}px)`}}>
        
        <Contact/>
        <Footer/>
      </div>
    
    </div>
  );
}

export default App;
