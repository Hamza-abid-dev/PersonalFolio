import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { Box, Container } from '@mui/material'
import Main from './Components/Main'
import Left from "./assets/BgGradient/left.png";
import Center from "./assets/BgGradient/center.png";
import Right from "./assets/BgGradient/right.png";
import Featured from './Components/Featured'
import KnowMe from './Components/KnowMe'
import Testimonials from './Components/Testimonials'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import FAQ from './Components/FAQ'
import FooterCovor from './Components/FooterCovor'
import Footer from './Components/Footer'
import Loader from './PreLoader/Loader'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 3-second loading time
  }, []);
  return (
    <>
    {isLoading ? <Loader /> :  <>
     <Navbar/>
     <Hero/>
     <Main/>
     <KnowMe/>
     <Featured/>
     <Testimonials/>
     <FAQ/>
     <FooterCovor/>
     <Footer/>
     </>}
    </>
  )
}

export default App
