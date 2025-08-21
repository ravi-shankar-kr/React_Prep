import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Header from './components/Header.jsx'

const App = () => {
  return (
     <>
     
     <div  >
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div></>
  )
}

export default App