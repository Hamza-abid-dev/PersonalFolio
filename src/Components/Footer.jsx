import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { FiveMpRounded } from '@mui/icons-material';
import { SiFiverr } from 'react-icons/si';
import { FaFacebook, FaLinkedin, FaUpwork } from 'react-icons/fa6';

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
            <a style={{color: 'white'}} href="https://www.fiverr.com/syedawais09?up_rollout=true"><SiFiverr size={30} style={{borderRadius: '50%', padding: '0.5rem', border: '1px solid white'}}/></a>
            <a style={{color: 'white'}} href="https://www.upwork.com/freelancers/~01e15d026b76990c75/"><FaUpwork size={30} style={{borderRadius: '50%', padding: '0.5rem', border: '1px solid white'}}/></a>
            <a style={{color: 'white'}} href="http://linkedin.com/in/syed-awais-hassan-522139233"><LinkedInIcon sx={{p:1, border: '1px solid white', borderRadius: '50%', fontSize: '2rem'}}/></a>
            <a style={{color: 'white'}} href="https://www.facebook.com/syed.awaishassan.7?mibextid=LQQJ4d"><FaFacebook size={30} style={{borderRadius: '50%', padding: '0.5rem', border: '1px solid white'}}/></a>
            <a style={{color: 'white'}} href="https://www.instagram.com/awais_hassan24?igsh=MXA5emFieXltZDg3cQ%3D%3D&utm_source=qr"><InstagramIcon sx={{p:1, border: '1px solid white', borderRadius: '50%', fontSize: '2rem'}}/></a>
            </Box>
            </li>
        </Box>
       </Box>
       <hr style={{marginTop: '50px'}} />
       <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', py:3}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{fontSize: {lg:'25px', xs: '20px'}, fontWeight: 'bold'}}>
            Syed Awais
            <br/>
            </Typography>
        </Box>
        <Box>
        <Typography sx={{color: '#C7D5D3', fontSize: '15px', ml: 4}}>
        <a style={{color: '#C7D5D3', textDecoration: 'none'}} href="https://www.logicruise.com/">www.logicruise.com</a>
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
