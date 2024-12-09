import { useState } from 'react'
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/contact';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

<BrowserRouter>
    <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About />} />
        {/* ... */}
    </Routes>
</BrowserRouter>

    
    </>
  )
}

export default App
