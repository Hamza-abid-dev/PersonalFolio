import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div>
      <Box sx={{bgcolor: '#012f2c', pt: 25, color: 'white'}}>
       <Container maxWidth="lg">
       <Box>
       <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', listStyle: 'none', fontSize: '20px', gap: 1.2, color: '#C7D5D3'}}>
            <li style={{fontWeight: '700', marginBottom: '10px', color: 'white'}}>Company</li>
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Referral Program</li>
            <li>Community</li>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', listStyle: 'none', fontSize: '20px', gap: 1.2, color: '#C7D5D3'}}>
            <li style={{fontWeight: '700', marginBottom: '10px', color: 'white'}}>Product</li>
            <li>Overview</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Tools & Integration</li>
            <li>Releases</li>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', listStyle: 'none', fontSize: '20px', gap: 1.2, color: '#C7D5D3'}}>
            <li style={{fontWeight: '700', marginBottom: '10px', color: 'white'}}>Support</li>
            <li>Help centre</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Press</li>
            <li>Status</li>
        </Box>
        <Box sx={{display: {md: 'flex', xs: 'none'}, flexDirection: 'column', listStyle: 'none', fontSize: '20px', gap: 1.2, color: '#C7D5D3'}}>
            <li style={{fontWeight: '700', marginBottom: '10px', color: 'white'}}>Social</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Github</li>
        </Box>
        <Box sx={{display: {md:'flex', xs: 'none'}, flexDirection: 'column', listStyle: 'none', fontSize: '20px', gap: 1.2, color: '#C7D5D3'}}>
            <li style={{fontWeight: '700', marginBottom: '10px', color: 'white'}}>Legal</li>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li></li>
            <li></li>
            <li>
            <Box sx={{display: 'flex', gap:0.3}}>
            <InstagramIcon sx={{p:0.5, border: '1px solid white', borderRadius: '50%'}}/>
            <YouTubeIcon sx={{p:0.5, border: '1px solid white', borderRadius: '50%'}}/>
            <LinkedInIcon sx={{p:0.5, border: '1px solid white', borderRadius: '50%'}}/>
            <XIcon sx={{p:0.5, border: '1px solid white', borderRadius: '50%'}}/>
            </Box>
            </li>
        </Box>
       </Box>
       <hr style={{marginTop: '50px'}} />
       <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', py:3}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2 }}>
            <img src="http://localhost:5173/src/assets/Vector.png" alt="" />
            <Typography sx={{fontSize: {lg:'25px', xs: '20px'}, fontWeight: 'bold'}}>
            OptiFolio
            </Typography>
        </Box>
        <Box>
        <Typography sx={{color: '#C7D5D3', fontSize: '15px', ml: 4}}>
        © 2024 Design Monks. All rights reserved.
        </Typography>
        </Box>
       </Box>
       </Box>
       </Container>
      </Box>
    </div>
  )
}

export default Footer
