import React, { useEffect } from 'react'
import './WhyUs.css'
import { Typography } from '@mui/material'
import logo1 from '../../../assets/download.png'
import logo2 from '../../../assets/download (1).png'
import logo3 from '../../../assets/download (2).png'
import logo4 from '../../../assets/download (3).png'



const WhyUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='whyus-wrapper'>
            <Typography variant='h5' className='title'>Why Choose Us</Typography>
            <div className='card-wrapper-inner'>
                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo1} alt=''></img>
                    </div>
                    <Typography className='heading'>Avoid Brokers</Typography>
                    <p className='para'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className='card' >
                    <div class="hexagon-content">
                        <div className='img-wrapper'>
                            <img src={logo2} alt=''></img>
                        </div>
                        <Typography className='heading'>Free Listings</Typography>
                        <p className='para'>Easy listing process. Also using WhatsApp</p>
                    </div>
                </div>

                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo3} alt=''></img>
                    </div>
                    <Typography className='heading'>Shortlist without visit</Typography>
                    <p className='para'>Extensive Information makes it easy</p>
                </div>

                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo4} alt=''></img>
                    </div>
                    <Typography className='heading'>Rental Agreement</Typography>
                    <p className='para'>Assistance in creating Rental agreement & Paper work</p>
                </div>
            </div>

            {/* <div>
                <Button className='know-more'
                    onClick={() => navigate('/how-it-works')}>How It Works</Button>
            </div> */}
        </div>
    )
}

export default WhyUs