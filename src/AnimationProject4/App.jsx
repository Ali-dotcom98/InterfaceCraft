import React from 'react'
import NavBar from './Components/Header/NavBar'
import Home from "./Components/Home"
import Services from "./Components/Services"
import Destination from './Components/Destination'
import AboutUs from './Components/AboutUs'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs'
import Aboutus1 from './Components/Aboutus1'
import Footer from './Components/Footer/Footer'
import {ThemeProvider} from "./ContextApi/ThemeContext"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <NavBar/>
        <Home/>
        <Services/>
        <Destination/>
        <AboutUs/>
        <Testimonials/>
        <ContactUs/>
        <Aboutus1/>
        <Footer/>
      </ThemeProvider>
       
    </>
  )
}

export default App