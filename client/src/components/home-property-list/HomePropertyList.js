import React from 'react'
import './HomePropertyList.css'
import HomeCard from '../home-card/HomeCard'
import { Typography } from '@mui/material'


const HomePropertyList = ({ currentList }) => {
    return (
        <div className='home-card-list-wrapper'>
            <Typography className='card-wrapper-header'>Featured Properties</Typography>
            <div className='card-list-wrapper'>

                {
                    currentList.map((property) => {
                        return (
                            <HomeCard property={property} key={property._id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePropertyList