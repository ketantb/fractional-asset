import React from 'react'
import './Footer.css';
import { Box, Button, Typography } from '@mui/material'

import { Icon } from 'react-icons-kit'
import { facebook2 } from 'react-icons-kit/icomoon/facebook2'
import { twitter } from 'react-icons-kit/icomoon/twitter'
import { linkedin } from 'react-icons-kit/icomoon/linkedin'

import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='footer-wrapper'>
      <div className='section1'>
        <Typography variant='h4' className='footer-title'>FRACTIONAL ASSETS</Typography>
        <Box className='col1'>
          <Typography onClick={() => navigate('/enquiry')} className='btn'>CONTACT US</Typography>
          <Typography onClick={() => navigate('/how-it-works')} className='btn'>HOW IT WORKS</Typography>
        </Box>
      </div>



      <div className=' col2 section2'>
        <Typography>Subscribe for daily updates</Typography>
        <Box className='col1 input-section'>
          <input type='input' placeholder='Enter your email' />
          <Button className='btn' >SUBMIT</Button>
        </Box>

        <Box className='col3 icon-wrapper'>
          <div className='icon-item'>
            <Icon icon={facebook2} size={30}></Icon>
          </div>
          <div className='icon-item'>
            <Icon icon={twitter} size={30}></Icon>
          </div>
          <div className='icon-item'>
            <Icon icon={linkedin} size={30}></Icon>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Footer