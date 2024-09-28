import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import heroimg from '../assets/Hero.png'
import Hero1 from '../assets/hero1.svg'
import Hero2 from '../assets/hero2.svg'
import Hero3 from '../assets/hero3.svg'
import Hero4 from '../assets/hero4.svg'
import Awais1 from '../assets/Awais1.png'
import Awais2 from '../assets/Awais2.png'
import Pen from '../assets/Icons/pen.svg'
import Left from "../assets/BgGradient/left.png";
import Center from "../assets/BgGradient/center.png";
import Right from "../assets/BgGradient/right.png";
import Slide1 from '../assets/HeroSlideIcons/1.svg'
import Slide2 from '../assets/HeroSlideIcons/2.svg'
import Slide3 from '../assets/HeroSlideIcons/3.svg'
import Slide4 from '../assets/HeroSlideIcons/4.svg'
import Slide5 from '../assets/HeroSlideIcons/5.svg'
import {  Element, Link } from 'react-scroll';
import { gsap } from "gsap";
import { Power2 } from 'gsap'
import { Power4 } from 'gsap'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import { FaSquareUpwork } from 'react-icons/fa6'
import { MdOutlineEmail } from "react-icons/md";
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/Facebook.png'
import Mail from '../assets/Mail.png'

const Hero = () => {
  useEffect(() => {
    gsap.to('#hero', {
      duration: 2,
      y: '100px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#one', {
      duration: 2,
      y: '50px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#two', {
      duration: 3,
      y: '50px',
      ease: Power4.easeInOut,
      opacity: 1,
    });

    gsap.to('#three', {
      duration: 2,
      y: '50px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#four', {
      duration: 5,
      y: '50px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#five', {
      duration: 2,
      x: '200px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#six', {
      duration: 2,
      x: '-200px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#slider', {
      duration: 4,
      y: '100px',
      ease: Power4.easeInOut,
      opacity: 1,
    });
  }, []);


  return (
   <Element name='Home'>
     <Box className="background-container" sx={{ color: 'white', py: {md: 20, xs:15}}}>
      <Container maxWidth="xl">
      <Grid id='hero' sx={{display: {sm: 'flex'}, mt: '-100px', opacity: '0'}}>
        <Box component='div' sx={{p: {xs: 0, sm: '70px 0', md: 7}, width: {md: "70%", sm: '70%'}}}>
        <Typography id="one" variant='h1' sx={{mt: '-100px',fontSize: {xs: '45px', md: '60px', sm: '40px', lg: '80px'}, fontWeight: '600'}}>
        THE ONE YOU CAN TRUST FOR IDEA GENERATION
        </Typography>
        <Typography id="two" variant='h6' sx={{maxWidth: '500px', fontSize: '15px', my: 2}}>
        I specialize in building full-stack applications using the MERN stack with a focus on responsive design and seamless user experiences.
        </Typography>
        <Box component="div" sx={{display: 'flex', gap: {xs:'20px', sm: '40px'}, mt: 5}}>
        <Link to='Newsletter' smooth={true} duration={1000}>
        <Box id="three" component="button" sx={{py: 1.8, px: 4, borderRadius: '10px', fontWeight: '600', bgcolor: '#7CD5C4', cursor: 'pointer', transition: 'ease-in-out 0.3s', border: '1px solid black',  '&:hover':{bgcolor: 'transparent', color: 'white', border: '1px solid white' }}}>
        Need a Word
        </Box>
        </Link>
        <Box id="four" component='div' sx={{display: 'flex', img: {width: {xs: '40px', sm: '50px'}, transition: 'all ease-in-out 0.2s', ":hover":{scale:'1.4'}}}}>
            <img style={{marginLeft: '-10px'}} src={Hero1} alt="" />
            <img style={{marginLeft: '-10px'}} src={Hero2} alt="" />
            <img style={{marginLeft: '-10px'}} src={Hero3} alt="" />
            <img style={{marginLeft: '-10px'}} src={Hero4} alt="" />
            <Box component='span' sx={{ml: 1}}>
            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
            100+
            </Typography>
            <Typography sx={{fontSize: '13px'}}>
            Happy customers
            </Typography>
            </Box>
        </Box>
        </Box>
        </Box>
        <Box component='div' sx={{
            mr: {lg:10},
            mt: {sm: 0, xs: '100px'},
            position:'relative',
            zIndex: 1, 
            img: {width: {lg: '100%', xs: '80%'}, margin: {lg: '0', xs: '20px 30px 0 30px'}, 
            },
            }}>
            <img style={{borderRadius: '20px', objectFit: 'cover', border: '5px solid #16A26F'}} src={Awais1} alt="" />
            <Typography id="five" sx={{position: 'absolute', top: '268px', display: 'flex', gap: '10px', bgcolor: '#EAFBF1', borderRadius: '20px 0 20px 8px', padding: {lg: '16px', xs: '8px'}, color: 'black', left: {lg: '-350px', xs: '-210px'}, boxShadow: '0px 0px 20px black', img:{width: {lg: '100%'}, mt: '0px', display: {lg: 'flex', xs: 'none'}}}}> <i><img src={Pen} alt="" /></i> I'm a Founder & CEO at <a style={{textDecoration: 'none', color: 'black', fontWeight: '700'}} href='http://www.logicruise.com/'>Logicriuse</a> </Typography>
            <Typography id="six" sx={{position: 'absolute', top: '76px', display: 'flex', gap: '10px', bgcolor: '#EAFBF1', borderRadius: '0px 20px 8px 20px', padding: {lg: '16px', xs: '8px'}, color: 'black', right: {lg: '-270px', xs: '-210px'}, boxShadow: '0px 0px 20px black'}}>👋 Hey, I'm Awais.</Typography>
        </Box>
      </Grid>
      <Container>
      <Box id="slider" sx={{display: 'flex', justifyContent: 'space-between', mt: 10, opacity: '0'}}>
      <Box sx={{ img: {width: {xs:'50px', md: '130px', sm: '80px'}}}}>
      <img src="https://www.logicruise.com/assets/fiver-CGv11MdS.png"/>
      </Box>
      <Box sx={{ img: {width: {xs:'50px', md: '130px', sm: '80px'}}}}>
      <img src="https://www.logicruise.com/assets/Linkdin-Bk4nRDAr.png"/>
      </Box>
      <Box sx={{ img: {width: {xs:'50px', md: '130px', sm: '80px'}}}}>
      <img src="https://www.logicruise.com/assets/Upwork-BWzB_EqU.png"/>
      </Box>
      <Box sx={{ img: {width: {xs:'50px', md: '130px', sm: '80px'}}}}>
      <img src={Instagram} alt="" />
      </Box>
      <Box sx={{ img: {width: {xs:'50px', md: '130px', sm: '80px'}}}}>
      <img src={Facebook} alt="" />
      </Box>
      <Box sx={{ img: {width: {xs:'50px', md: '130px', sm: '80px'}}}}>
      <img src={Mail} alt="" />
      </Box>
      </Box>
      </Container>
      </Container>
    </Box>
   </Element>
  )
}

export default Hero
