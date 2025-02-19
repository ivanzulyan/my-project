import React from 'react'
import Navbar from './components/Navbar/Navbar'
import FooterSection from './components/FooterSection/FooterSection'
import PageRoutes from './components/PageRoutes/PageRoutes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicPlayer from './assets/MusicPlayer';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Navbar />
      <PageRoutes />
      <FooterSection />
      <MusicPlayer />
    </main>
   
  )
}

export default App
