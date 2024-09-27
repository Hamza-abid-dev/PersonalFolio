import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo1 from '../assets/Featured/logo1.png'
import Logo2 from '../assets/Featured/logo2.png'
import Logo3 from '../assets/Featured/logo3.png'
import Paper from '@mui/material/Paper';
import EastIcon from '@mui/icons-material/East';
import { styled } from '@mui/material/styles';
import { Element } from 'react-scroll';





const cards = [
    {
        logo: 'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg',
        title: 'Building Scalable Applications',
        description: 'Dive deep into strategies for designing and developing scalable applications using the MERN stack, ensuring high performance as your user base grows.'
    },
    {
        logo: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png',
        title: 'Optimizing React Performance',
        description: "Learn best practices for optimizing your React applications, from state management techniques to minimizing re-renders and improving load times."
    },
    {
        logo: 'https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg',
        title: 'Mastering Node.js Backend',
        description: 'Explore the core concepts of building efficient, secure, and maintainable backends with Node.js, enhancing your server-side performance and API handling.'
    }
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Featured = () => {
  return (
    <Element name='Resources'>
       <Box sx={{py: 10}}>
        <Container maxWidth="xl">
        <Grid>
            <Box sx={{textAlign: {lg: 'center'}}}>
            <Typography variant='h3' sx={{fontWeight: '700', mb: 1}}>
            Featured EPISODE
            </Typography>
            <Typography>
            From updating work samples to optimizing for mobile devices, Noman <br /> will provide you with the knowledge and skills you need. 
            </Typography>
            </Box>
        </Grid>
        <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={{ xs: 2, md: 0 }} columns={{ xs: 2, sm: 2, md: 12 }}>
          {cards.map((x)=>(
            <Grid item xs={2} sm={4} md={4}>
            <Item sx={{backgroundColor: 'transparent' , boxShadow: 'none', boxSizing: 'border-box', img: {width: '70%'}}}>
                <img style={{width: '80%', height: '220px', borderTopLeftRadius: '30px',borderBottomLeftRadius: '30px',borderBottomRightRadius: '30px',}} src={x.logo} alt="" />
                <Box sx={{mt: 2, width: {md:'80%'}, mx: 'auto'}}>
                <Typography sx={{fontSize: '20px', fontWeight: '700', mb: 2, color: 'black'}}>
                    {x.title}
                </Typography>
                <Typography>
                    {x.description}
                </Typography>
                </Box>
            </Item>
          </Grid>
          ))}
      </Grid>
    </Box>
        </Container>
      </Box>
    </Element>
  )
}

export default Featured
