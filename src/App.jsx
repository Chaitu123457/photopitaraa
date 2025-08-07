import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Wedding from './components/Wedding'
import Commercial from './components/Commercial'
import Filmmaking from './components/Filmmaking'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import InstagramFeed from './components/InstagramFeed'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/filmmaking" element={<Filmmaking />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instagram" element={<InstagramFeed />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

