
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Survey from './components/Survey';
import SurveyQuestions from './components/SurveyQuestions';


import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>

<BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Question" element={<SurveyQuestions/>} />
    </Routes>
</BrowserRouter>

    
    </>
  )
}

export default App
