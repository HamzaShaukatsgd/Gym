import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Program from '../components/Program'
import Aboutus from '../components/Aboutus'
import Consultant from '../components/Consultant'
import Singup from '../components/Singup'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Program/>
      <Aboutus/>
      <Consultant/>
      <Singup/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home
