import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

const App = () => {
  return (
    <BrowserRouter >
      <div>
      <Navbar />

      <div className=' h-screen'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
