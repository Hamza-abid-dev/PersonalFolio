import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import headImg from '../assets/Main/mainHead.png'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Logo1 from '../assets/Main/cardLogo1.png'
import Logo2 from '../assets/Main/cardLogo2.png'
import Logo3 from '../assets/Main/cardLogo3.png'
import { useInView } from 'react-intersection-observer';
import { Power3, gsap } from 'gsap';



const cards = [
    {
        logo: Logo1,
        title: 'Copywriting Strategy Ever',
        description: 'An expert on our team will work with you to understand your goals, technical needs, and team.'
    },
    {
        logo: Logo2,
        title: 'Free LinkedIn Masterclass',
        description: "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24."
    },
    {
        logo: Logo3,
        title: 'Best LinkedIn Posts',
        description: 'Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire .'
    }
]



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Main = () => {


    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
      });
    
          if(inView){
            gsap.to('#main', {
                duration:1.5,
                y: "-100px",
                ease: Power3.easeInOut,
                opacity: 1,
              });
            gsap.to('#img', {
              duration:3,
              y: 30,
              ease: Power3.easeInOut,
              width: '100%',
              opacity: 1,
            });
          }
          if(inView){
            gsap.to('#textone', {
              duration:1.5,
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
                duration:1,
                y: 30,
                ease: Power3.easeInOut,
                opacity: 1,
              });
          }
    

  return (
    <div style={{zIndex: 0}}>
      <Box ref={ref} sx={{py: 10, background: 'linear-gradient(to left top, #f6f8f6, #e9f3f2)'}}>
        <Container id="main" sx={{opacity: '0', mt: '100px'}} maxWidth="xl">
        <Grid sx={{display: {md:'flex'}, justifyContent: {md: 'space-evenly', xs: 'center', sm: 'center'}}}>
            <Box sx={{display: 'flex', justifyContent: 'center', img: {width: '10%', } }}>
                <img id='img' src={headImg} alt="" />
            </Box>
            <Box sx={{width: {md: '40%', xs: '100%'}, p: {lg: 5}, mt: {lg: 0, xs: 5}}}>
                <Typography id="textone" variant='h3' sx={{fontWeight: '700'}}>Increase Your Skills & Your Opportunities</Typography>
                <Typography id="texttwo" sx={{my: 3}}>With over a decade of experience in digital marketing and career development, Abdullah Noman is a seasoned professional dedicated to helping individuals achieve their career goals.</Typography>
                <Box id="btn" component="button" sx={{py: 1.7, px: 4, borderRadius: '10px', bgcolor: 'black', color: 'white', fontWeight: '600', cursor: 'pointer', transition: 'ease-in-out 0.3s',  '&:hover':{bgcolor: 'transparent', color: 'black'}}}>
                    Learn more
                </Box>
            </Box>
        </Grid>
        <hr style={{margin: '100px 0 50px 0'}} />
        <Box ref={ref}>
            <Box sx={{display: {lg: 'flex'}, justifyContent: 'center', textAlign: 'center', gap: '20px'}}>
                {cards.map((x)=>(
                   <Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', ml: '45px'}}>
                    <img src={x.logo} alt="" />
                    </Box>
                    <Box sx={{mt: '-80px'}}>
                    <Typography sx={{fontSize: '25px', fontWeight: '700', mb: 2}}>
                        {x.title}
                    </Typography>
                    <Typography sx={{width: {lg:'400px'}, mx: 'auto'}}>
                        {x.description}
                    </Typography>
                    </Box>
                   </Box>
                ))}
            </Box>
        </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Main
