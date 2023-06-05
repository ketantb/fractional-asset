import React, { useEffect, useState } from 'react'
import "./HouseCard.css"
import { Icon } from 'react-icons-kit'
import { checkmark } from 'react-icons-kit/icomoon/checkmark'
import { useNavigate } from 'react-router-dom'


import { Button, Typography } from '@mui/material';


const HouseCard = ({ card }) => {
    const navigate = useNavigate()
    const aminities = card.aminities.slice(0, 3)

    const [soldOut, setSoldOut] = useState(false)
    const available = card.availableShare

    useEffect(() => {
        (available === 0) ? (setSoldOut(true)) : (setSoldOut(false))
        // eslint-disable-next-line
    }, [])



    //handle viewDetails
    const viewDetails = (id) => {
        navigate(`/property-details/${id}`)
        console.log('propertyId', id)
    }

    return (
        <div className="big-property-card">
            <section className="card-col-1" style={
                {
                    background: `url(${card.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }
            }>
            </section >
            <section className="card-col-2" style={{ marginLeft: '1rem' }}>
                <div className="card-col-2-row-1">
                    <Button className='view-more-btn'
                        onClick={() => viewDetails(card._id)}>view more</Button>

                    <section className='propertyStatus'>
                        {(soldOut) ? (<Typography className='sold-out' style={{ fontSize: 'medium' }}>SOLD OUT !</Typography>
                        ) : (null)}
                    </section>
                </div>
                <div className='col-2-content' style={{ display: 'flex' }}>
                    <Typography>{card.propertyType}</Typography>
                    <Typography style={{ marginLeft: '1.2rem', fontSize: '1.1rem' }}>
                        {/* for {card.propertyAdType} */}
                    </Typography>
                </div>
                <div className="card-col-2-row-2">
                    <h5>{card.street}, {card.landmark}, {card.city}</h5>
                </div>
                <div className="card-col-2-row-3" style={{ display: 'flex', backgroundColor: 'rgb(250, 245, 245)', padding: '1rem 0.5rem' }}>
                    {aminities.map((aminity, i) => {
                        return (
                            <div className='aminity-item'>
                                <Icon icon={checkmark} className='icon' style={{ color: 'green', paddingLeft: '0.5rem' }} size={10}></Icon>
                                <Typography className='item'>{aminity}</Typography>
                            </div>
                        )
                    })}
                </div>

                <div className='card-col-2-col-4'>
                    <p className='additional-details'>
                        {card.additionalInfo}
                        <Button className='showMoreBtn' onClick={() => navigate(`/property-details/${card._id}`)}>show more</Button>
                    </p>
                </div>
            </section >

        </div>

    )
}

export default HouseCard;