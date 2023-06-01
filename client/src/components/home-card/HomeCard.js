import React from 'react'
import './HomeCard.css'
// import img1 from '../../assets/banner.jpg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HomeCard = ({ property }) => {
    const navigate = useNavigate()

    const viewDetails = (id) => {
        navigate(`/property-details/${id}`)
        console.log('propertyId', id)
    }

    return (
        <div className='home-card-wrapper'>
            <div className='card' style={{ border: 'none' }}>
                <div className='img-wrapper' style={
                    {
                        background: `url(${property.images[0]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center center'
                    }}>
                    <Button className='view-more-btn'
                        onClick={() => viewDetails(property._id)}>view more</Button>
                </div>
                <div className='content-wrapper'>
                    <h5>{property.city}, India</h5>
                    <h5>Share Price:  <i className="fas fa-rupee-sign fa-xs"></i>
                        <span>{property.pricePerShare}</span>
                    </h5>
                </div>
            </div>

        </div>
    )
}

export default HomeCard