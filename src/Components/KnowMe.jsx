import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Headimg from "../assets/KnowMe/head.png";
import { Power3, gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

const KnowMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

      if(inView){
        gsap.to('#know', {
            duration:1.5,
            ease: Power3.easeInOut,
            opacity: 1,
          });
          gsap.to('#text', {
            duration:2,
            y: 150,
            ease: Power3.easeInOut,
            opacity: 1,
          });
          gsap.to('#textone', {
            duration:2.5,
            y: 30,
            ease: Power3.easeInOut,
            opacity: 1,
          });
          gsap.to('#texttwo', {
            duration:3,
            y: 30,
            ease: Power3.easeInOut,
            opacity: 1,
          });
          gsap.to('#btn', {
            duration:3.5,
            y: 30,
            ease: Power3.easeInOut,
            opacity: 1,
          });
        gsap.to('#img1', {
          duration:1,
          y: 30,
          width: '100%',
          ease: Power3.easeInOut,
          opacity: 1,
        });
      }
  return (
    <div>
      <Box id="know" ref={ref} sx={{background: 'linear-gradient(to bottom, #ffffff, #f2fcec)', py: 10}}>
        <Container maxWidth="xl">
        <Grid sx={{display: {md:'flex'}, justifyContent: {md: 'space-evenly', xs: 'center', sm: 'center'}}}>
            <Box id="text" sx={{width: {md: '40%', xs: '100%'}, p: {lg: 5}, mt: '-200px'}}>
                <Typography id="textone" variant='h3' sx={{fontWeight: '700'}}>Getting to know me</Typography>
                <Typography id="texttwo" sx={{my: 3}}>I’m a MERN stack developer specializing in building scalable, high-performance web applications with MongoDB, Express, React, and Node.js. My focus is on delivering responsive designs and seamless user experiences.</Typography>
                <Box id="btn" component="button" sx={{py: 1.7, px: 4, borderRadius: '10px', bgcolor: 'black', color: 'white', fontWeight: '600', cursor: 'pointer', transition: 'ease-in-out 0.3s',  '&:hover':{bgcolor: 'transparent', color: 'black'}}}>
                    Learn more
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', img: {width: '10%'}, mt: {md: '0', xs: '200px'}}}>
                <img id='img1' src={Headimg} alt="" />
            </Box>
        </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default KnowMe
