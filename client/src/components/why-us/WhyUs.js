import React from 'react'
import './WhyUs.css'
import { Typography } from '@mui/material'
import logo1 from '../../assets/download.png'
import logo2 from '../../assets/download (1).png'
import logo3 from '../../assets/download (2).png'
import logo4 from '../../assets/download (3).png'



const WhyUs = () => {
    return (
        <div className='whyus-wrapper'>
            <Typography variant='h5' className='title'>WHY CHOOSE US</Typography>
            <div className='card-wrapper'>
                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo1} alt=''></img>
                    </div>
                    <Typography className='heading'>Avoid Brokers</Typography>
                    <p className='para'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo2} alt=''></img>
                    </div>
                    <Typography className='heading'>Free Listings</Typography>
                    <p className='para'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo3} alt=''></img>
                    </div>
                    <Typography className='heading'>Shortlist without visit</Typography>
                    <p className='para'>We directly connect you to verified owners to save brokerage</p>
                </div>

                <div className='card' >
                    <div className='img-wrapper'>
                        <img src={logo4} alt=''></img>
                    </div>
                    <Typography className='heading'>Rental Agreement</Typography>
                    <p className='para'>We directly connect you to verified owners to save brokerage</p>
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