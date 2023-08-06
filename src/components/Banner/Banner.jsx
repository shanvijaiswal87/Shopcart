import React from 'react'
// import { useState } from 'react';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';


function Banner() {
   
    return (
        
          <div style={{ position: 'relative' }}>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/headphone-banner-design-template-c46c02738002f860b1bee00e378eff4a_screen.jpg?ts=1669277015" alt="Banner" style={{ width: '90%', height: 'auto',
          marginLeft:'70px',
          marginRight:'110px',
          
         }}  />
          
          <Button
            style={{
              position: 'absolute',
              top: '69%',
              left: '30%',
              height:'7vh',
              width:'12.5vw',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '15px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            
    </Button>      
    </div>
  )
}

export default Banner
