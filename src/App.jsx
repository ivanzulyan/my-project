import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ServicesSection from './components/ServicesSection/ServicesSection'
import AuthorizedSection from './components/AuthorizedSection/AuthorizedSection'
import LastSection from './components/LastSection/LastSection'
import LastTwoSection from './components/LastSection/LastTwoSection'
import FooterSection from './components/FooterSection/FooterSection'
import PageRoutes from './components/PageRoutes/PageRoutes'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Navbar />
      <PageRoutes />
      <FooterSection />
    </main>
  )
}

export default App
