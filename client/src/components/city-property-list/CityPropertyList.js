import React, { useState, useEffect } from 'react'
import './CityPropertyList.css'
import axios from '../../helpers/axios'
import PropertyCard from '../property-card/PropertyCard'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom';


const CityPropertyList = () => {
    const { city } = useParams();

  // eslint-disable-next-line
  const [list, setList] = useState([])

  const getPropertyList = async () => {
    try {
      const response = await axios.get(`/city/${city}`)
      if (response.data.success) {
        console.log('response from city property list', response.data)
        setList(response.data.propertyList)
      }
      else{
        console.log('response from city property page err', response.data.message)
      }
    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getPropertyList();
    // eslint-disable-next-line
  }, [])
  //function to get property data from backend completed



  return (
    <>
      <div className='buyProperty-header'>
        <Typography className='search-results'>Search Results<span>{list.length}</span></Typography>
      </div>
      <div className='buy-card-wrapper'>
        {(list.length <= 0) ? (<h1 style={{ opacity: '0.3', marginLeft: '3rem' }}>NO DATA FOUND</h1>) :
          (list.map((card) => {
          return (
              <PropertyCard card={card} key={card._id} />
          )
      }))
        }
      </div>
    </>
  )
}

export default CityPropertyList