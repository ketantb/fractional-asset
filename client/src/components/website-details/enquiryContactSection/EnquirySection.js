import React, { useEffect } from 'react'
import './enquirySection.css'
import EnquiryForm from './enquiryForm/EnquiryForm'
import { Typography } from '@mui/material'

const EnquirySection = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
}, [])


  return (
    <div style={{ marginTop: '5rem' }} className='enquiryContainer'>
      {/* <Typography variant='h6' className='heading'>
        Thank you for choosing our team as your real estate partner. We look forward to working with you and helping you achieve your real estate dreams!
      </Typography> */}

      <div className=' fluid-container form-wrapper row'>
        {/* left form */}
        <div className='leftForm-wrapper col'>
          <div >
            <h4 className='leftForm-wrapper-item'> Please reach out to us on the number below,
              <br />or by filling up the contact form.</h4>
            <h4 className='leftForm-wrapper-item'>Phone</h4>
            <h6 className='contact-details-wrapper'>Fractional Properties
              <span className='contactno'>123456789</span></h6>
            <h4 className='leftForm-wrapper-item'>Mail</h4>
            <span className='email'>test@fractional.properties.com</span>
            <div className='icon-wrapper'></div>
          </div>
        </div>
        {/* right form */}
        <div className='rightForm-wrapper col'>
          <h3 className='rightForm-wrapper-heading'>Tell us more about yourself so we can help you find your second home.</h3>
          <div className='enquiryform'>
            <EnquiryForm />
          </div>
        </div>
      </div>

      <Typography variant='h6' className='heading'>
        Thank you for choosing our team as your real estate partner. We look forward to working with you and helping you achieve your real estate dreams!
      </Typography>
    </div>
  )
}

export default EnquirySection