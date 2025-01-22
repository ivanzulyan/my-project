import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import AuthorizedSection from '../components/AuthorizedSection/AuthorizedSection'
import LastSection from '../components/LastSection/LastSection'
import LastTwoSection from '../components/LastSection/LastTwoSection'

function Homepage() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <AuthorizedSection />
    <LastSection />
    <LastTwoSection />
    </>
  )
}

export default Homepage
