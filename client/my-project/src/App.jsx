import { useState } from 'react'
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/contact';
import Survey from './components/Survey';
import Question from './components/Question';


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
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Question" element={<Question/>} />
        {/* ... */}
    </Routes>
</BrowserRouter>

    
    </>
  )
}

export default App
