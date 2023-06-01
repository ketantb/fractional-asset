import React, { useEffect, useState } from 'react';
import './AppNavbar.css';
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line
// import logo from '../../assets/logo.png';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from 'react-icons-kit'
import { cross } from 'react-icons-kit/icomoon/cross'



const AppNavbar = ({ auth, setAuth }) => {
  const navigate = useNavigate()


  const token = localStorage.getItem('token')
  useEffect(() => {
    setAuth(token);
    //eslint-disable-next-line
  }, [token])




  /*    navbar changing its color   */
  const [navBackground, setNavBackground] = useState('lightblue');
  //handle scroll
  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setNavBackground('lightblue');
    } else {
      setNavBackground('lightblue');
    }
  }
  //useffect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // ***navbar changin its color ends



  /*  handling responsive navbar */
  const [showNavbar, setShowNavbar] = useState('none')
  // eslint-disable-next-line
  const [navbarHidden, setNavbarHidden] = useState(true)
  //funtion to show or hide navbar on clicking menu icon
  const handleOpenNavbar = () => {
    setShowNavbar('block');
    setNavbarHidden(false)
  }
  const handleCloseNavbar = () => {
    setShowNavbar('none');
    setNavbarHidden(false)
  }
  /*   handling responsive navbar ends */


  return (
    <div className='app-bar' style={{ backgroundColor: navBackground }}>

      {/* desktop view navbar */}
      <div className='desktop-section'>
        <section className='appbar-col-1'>
          <Typography className='title' onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}>FRACTIONAL ASSETS</Typography>
          {/* <div className='logoWrapper' onClick={() => navigate('/')}><img src={logo} alt='banner' />
          </div> */}
        </section>
        <section className='appbar-col-2'>
          <Box className='col-2-box'>
            <Button className='btn-item' onClick={() => navigate('/')}>Home</Button>
            <Button className='btn-item' onClick={() => navigate('/how-it-works')}>How It Works</Button>
            <Button className='btn-item' onClick={() => navigate('/aboutus')}>About Us</Button>
            <Button className='btn-item' onClick={() => navigate('/faqs')}>FAQ</Button>
            <Button className='btn-item' onClick={() => navigate('/buy-property')}>BUY</Button>
            <Button className='btn-item' onClick={() => navigate('/rent-property')}>RENT</Button>
            <Button className='btn-item' onClick={() => navigate('/property-form')}>POST PROPERTY</Button>
            {auth ? (<Button className='btn-item' onClick={() => { navigate('/my-property') }}>MY PROPERTY</Button>) : (null)}
            {auth ?
              (<Button className='btn-item' onClick={() => {
                localStorage.clear();
                navigate('/');
              }} >LOGOUT</Button>)
              :
              (<Button className='btn-item' onClick={() => navigate('/signin')}>LOGIN</Button>)}
          </Box>

          <div className='menu' onClick={handleOpenNavbar}><FaAlignJustify /></div>

        </section>
      </div>


      {/* mobile view navbar */}
      <div className='right-side-navbar' style={{ display: showNavbar }}>
        <Box className='col-2-box' style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <Icon icon={cross} size={15} style={{ float: 'right', paddingRight: '1rem' }}
              onClick={handleCloseNavbar} />
          </div>
          <Button className='btn-item' onClick={() => { navigate('/'); handleCloseNavbar() }}>Home</Button>
          <Button className='btn-item' onClick={() => { navigate('/how-it-works'); handleCloseNavbar() }}>How It Works</Button>
          <Button className='btn-item' onClick={() => { navigate('/aboutus'); handleCloseNavbar() }}>About Us</Button>
          <Button className='btn-item' onClick={() => { navigate('/faqs'); handleCloseNavbar() }}>FAQs</Button>
          <Button className='btn-item' onClick={() => { navigate('/buy-property'); handleCloseNavbar() }}>BUY</Button>
          <Button className='btn-item' onClick={() => { navigate('/rent-property'); handleCloseNavbar() }}>RENT</Button>
          <Button className='btn-item' onClick={() => { navigate('/property-form'); handleCloseNavbar() }}>POST PROPERTY</Button>
          {auth ? (<Button className='btn-item' style={{ padding: '0rem', marginTop: '0.1rem' }} onClick={() => { navigate('/my-property'); handleCloseNavbar() }}>MY PROPERTY</Button>) : (null)}
          {auth ?
            (<Button className='btn-item' onClick={() => {
              localStorage.clear();
              navigate('/');
              handleCloseNavbar()
            }}
              style={{ padding: '0rem', marginTop: '0.4rem', marginBottom: '1rem' }}>LOGOUT</Button>)
            :
            (<Button className='btn-item' onClick={() => { navigate('/signin'); handleCloseNavbar() }}
              style={{ padding: '0rem', marginTop: '0rem' }}>LOGIN</Button>)}
        </Box>
      </div>

      {/* mobile view navbar ends */}




    </div>
  )
}

export default AppNavbar
