import React, { useState, useEffect } from 'react'
import './ViewDetails.css'
import { useParams } from 'react-router-dom';
import axios from '../../../helpers/axios'
import ViewdetailsImageList from './image-list/ImageList'
import { Typography } from '@mui/material';
import { Icon } from 'react-icons-kit'
import { checkmark } from 'react-icons-kit/icomoon/checkmark'
import ReservationForm from '../../reservation-form/ReservationForm';
// import { toast } from 'react-hot-toast'

const ViewDetails = () => {

  const { id } = useParams();
  const [property, setProperty] = useState({})

  const getPropertyDetails = async () => {
    try {
      const response = await axios.get(`/property-details/${id}`)
      if (response.data.success) {
        console.log('response from view details page', response.data.propertyDetails)
        setProperty(response.data.propertyDetails)

      }
      else {
        console.log('response from view details page', response.data.message)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPropertyDetails();
    // eslint-disable-next-line
  }, [id]);

  const location = `${property.street} , ${property.landmark} ,${property.city}`


  //RESERVATION FORM
  const [reservationForm, setReservationForm] = useState({
    firstname: '', lastname: '',
    email: '',
    contact: '',
    noOfShares: 1
  })


  return (

    <div className='viewdetails-wrapper'>

      {/* desktop section */}
      {/* section 1 */}
      <div className='section1 location'>
        <h5>{location}</h5>
        <Typography>{property.pin},{property.state}</Typography>
      </div>


      <div className='section2 images'>
        <ViewdetailsImageList property={property} />
      </div>

      <div className=' section3 about-aminities-reserve'>
        <div className='property-details'>
          <div className='aminities1'>
            <Typography className='item'>
              <h6>Area:</h6>{property.area} Sq.</Typography>
            <Typography className='item'>
              <h6>Bedrooms:</h6>{property.bedroom}</Typography>
            <Typography className='item'>
              <h6>Bathrooms:</h6>{property.bathroom}</Typography>
            <Typography className='item'>
              <h6>Furnishing:</h6>{property.furnishing} </Typography>
          </div>

          <div className='aminities'>
            <Typography style={{ fontWeight: 'bold', marginTop: '1rem' }} className='title'>AMINITIES</Typography>

            <div className='aminities2 row'>
              {property.aminities && property.aminities.length > 0 &&
                property.aminities.map((aminity, i) => {
                  return (
                    <div className='col-2 aminity-item' key={i + 1}>
                      <Icon icon={checkmark} size={10} ></Icon>
                      <Typography className='item'>{aminity}</Typography>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className='about-property'>
            <Typography style={{ fontWeight: 'bold' }}>ABOUT PROPERTY</Typography>
            <p style={{ marginTop: '0.2rem', textAlign: 'justify' }}>
              {property.additionalInfo}
            </p>
          </div>
        </div>

        {/* <div className='propertyStatus'>
          {(soldOut) ? (<Typography  >SOLD OUT !</Typography>
          ) : (
            <Button variant='contained' color='success' className='Reserve' >Reserve</Button>
          )}
        </div> */}

        <div className='propertyStatus'>
          <Typography className='item'>Book Your Property Online</Typography>
          <ReservationForm reservationForm={reservationForm} setReservationForm={setReservationForm} />
        </div>
      </div>
      <div class="slider">

      </div>


      <div className='section4'>
        <Typography>SEARCH ON MAP</Typography>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6799193416578!2d73.07173347492854!3d19.165483282057583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfe8e8463b39%3A0x90dcc712308303a1!2sPalava%20City%20by%20LODHA!5e0!3m2!1sen!2sin!4v1681368592991!5m2!1sen!2sin" loading="lazy"
          title='google-map'
          className='google-map'></iframe>
      </div>
      {/* desktop section ends */}

    </div>
  )
}

export default ViewDetails