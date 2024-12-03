import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Image from './Component/Image'
import Banner from './Component/Banner'
import Card from './Component/Card'
import HeroOne from './Component/HeroOne'
import TestimonialSlider from './Component/TestimonialSlider'
import HeroTow from './Component/HeroTow'
import Last from './Component/Last'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Image /> 
      <Banner />
      <Card />
      <HeroOne />
      <TestimonialSlider />
      <HeroTow />
      <Last />
      <Footer />
    </>
  )
}

export default App
