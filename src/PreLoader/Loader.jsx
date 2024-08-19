import React from 'react'
import './Loader.css'; 
import { Box } from '@mui/material';

const Loader = ({ size, background }) => {
    const loaderStyle = {
        width: '100px', // Use size prop to set width
        height: '100px', // Use size prop to set height
        background: '' // Use background prop to set background
      };
  return (
    <Box>
          <div className="loader" style={loaderStyle}></div>
    </Box>
  )
}

export default Loader
