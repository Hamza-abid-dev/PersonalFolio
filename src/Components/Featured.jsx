import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo1 from '../assets/Featured/logo1.png'
import Logo2 from '../assets/Featured/logo2.png'
import Logo3 from '../assets/Featured/logo3.png'
import Paper from '@mui/material/Paper';
import EastIcon from '@mui/icons-material/East';
import { styled } from '@mui/material/styles';





const cards = [
    {
        logo: Logo1,
        title: 'Get A New Website Done ',
        description: 'Create a strong personal brand identity that exudes authority in the UK business industry.'
    },
    {
        logo: Logo2,
        title: 'Create Enticing Brand for A Luxury Gift Brand',
        description: "Too many e-commerce brands sell lavender sachets at a low price. Lamiale is a luxury product."
    },
    {
        logo: Logo3,
        title: 'Killer Content Strategy to Give The Brand A New Life Online',
        description: 'Business Intelligence (BI) is a highly “technical” industry. It is tough to attract the right.'
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
    <div>
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
                <img src={x.logo} alt="" />
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
    </div>
  )
}

export default Featured
