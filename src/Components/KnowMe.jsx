import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Headimg from "../assets/KnowMe/head.png";

const KnowMe = () => {
  return (
    <div>
      <Box sx={{background: 'linear-gradient(to bottom, #ffffff, #f2fcec)', py: 10}}>
        <Container maxWidth="xl">
        <Grid sx={{display: {md:'flex'}, justifyContent: {md: 'space-evenly', xs: 'center', sm: 'center'}}}>
            <Box sx={{width: {md: '40%', xs: '100%'}, p: {lg: 5}}}>
                <Typography variant='h3' sx={{fontWeight: '700'}}>Getting to know me</Typography>
                <Typography sx={{my: 3}}>From updating work samples to optimizing for mobile devices, Noman will provide you with the knowledge and skills you need to stand out in today's competitive job market.</Typography>
                <Box component="button" sx={{py: 1.7, px: 4, borderRadius: '10px', bgcolor: 'black', color: 'white', fontWeight: '600', cursor: 'pointer', transition: 'ease-in-out 0.3s',  '&:hover':{bgcolor: 'transparent', color: 'black'}}}>
                    Learn more
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', img: {width: '100%'}, mt: {lg: 0, xs: 5}}}>
                <img src={Headimg} alt="" />
            </Box>
        </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default KnowMe
