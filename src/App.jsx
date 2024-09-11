import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './ResumeApp/LandingPage'
import Education from './ResumeApp/Education'
import Experiences from './ResumeApp/Experiences'
import Personal from './ResumeApp/Personal'
import Skills from './ResumeApp/Skills'
import Dashboard from './ResumeApp/Dashboard'
import NotFound from './ResumeApp/NotFound'
import About from './ResumeApp/About'

function App() {
 
  return (
  
<BrowserRouter>
  <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/education' element={<Education />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/experiences' element={<Experiences />}></Route>
      <Route path='/personal' element={<Personal />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='*' element={<NotFound />}></Route>  
  </Routes>
</BrowserRouter>

  )
}

export default App
