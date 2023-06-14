import React, { useEffect, useState } from 'react'
import './PropertyForm.css'
import axios from '../../../helpers/axios';
// import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import PropertyDetails from './propertyFormSteps/PropertyDetails'
import Amenities from './propertyFormSteps/Amenities';
import Locality from './propertyFormSteps/Locality';
import AdditionalInfo from './propertyFormSteps/AdditionalInfo'

import { FaHandPointDown } from "react-icons/fa";

import { cloudinaryImgUpload } from '../../../helpers/cloudinary';



const PropertyForm = () => {
  const navigate = useNavigate()

  //PROPERTY DETAILS
  const [propertyData, setPropertyData] = useState({
    propertyType: '', propertyAdType: '', propertyAge: '',
    area: '', bedroom: '', bathroom: '', price: '',
    totalShares: '', availableShares: '', perSharePrice: ''
  })
  //LOCATION DETAILS
  const [locality, setLocality] = useState({
    street: '', landmark: '', city: '', pin: '', state: '',
    nearbyPlaces: ''
  })
  //AMINTIES
  const [aminities, setAminities] = useState([])
  const [newAminity, setNewAminity] = useState('')



  //UPLOAD PHOTOS
  const [imgArray, setImgArray] = useState([]);
  const handleFileChange = (e) => {
    setImgArray([...imgArray, ...e.target.files]);
  };
  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [err, setErr] = useState(false)
  useEffect(() => {
    (additionalDetails.length > 1000) ? (setErr(true)) : (setErr(false))
  }, [additionalDetails])


  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    if (!token) {
      toast.error('Please sign in first')
    }
    else {
      if (additionalDetails.length > 1000) {
        setErr(true)
      }
      else {
        toast.loading('Posting property data')
        let images = [];
        for (let i = 0; i < imgArray.length; i++) {
          const urlData = await cloudinaryImgUpload(imgArray[i])
          images.push(urlData)
        }
        try {
          const form = { ...propertyData, ...locality, aminities, additionalDetails, images }
          const token = localStorage.getItem("token")

          const response = await axios.post('/property-form', form, {
            headers: {
              authorization: token
            }
          });
          if (response.data.success) {
            toast.dismiss()
            console.log(response.data.property)
            console.log('response ', response.data.property);
            // navigate('/property-form')
          }
          console.log(form)
        }
        catch (err) {
          console.log(err);
        }
      }
    }

  };


  return (
    <div className='property-form-wrapper' >
      {/* <form onSubmit={handleSubmit}> */}
      <div style={{ display: 'flex' }}>
        <div><FaHandPointDown /></div>
        <Typography className='title' style={{ marginLeft: '0.5rem' }}>SELL OR BUY YOUR PROPERTY HERE FOR FREE</Typography>
      </div>


      {/* section1 */}
      <Accordion >
        <AccordionSummary className='accordian'
          expandIcon={'+'}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>PROPERTY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PropertyDetails propertyData={propertyData} setPropertyData={setPropertyData} />
        </AccordionDetails>
      </Accordion>
      {/* section 1 ends */}


      {/* section 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={'+'}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>AMINITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Amenities aminities={aminities} setAminities={setAminities} newAminity={newAminity} setNewAminity={setNewAminity} />
        </AccordionDetails>
      </Accordion>
      {/* section 2 ends */}



      {/* section 3 */}
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={'+'}
        >
          <Typography>LOCALITY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Locality locality={locality} setLocality={setLocality} />
        </AccordionDetails>
      </Accordion>
      {/* section 3 ends */}


      {/* section 4 */}
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={'+'}
        >
          <Typography>UPLOAD PROPERTY IMAGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='upload-image-form-wrapper'>
            <p style={{ opacity: '0.6' }}>You can upload upto 8 imgArray only</p>
            <form>
              <input type="file" maxLength={8} name="imgArray" multiple onChange={handleFileChange} />
            </form>
            <div className='imgArray-wrapper'>
              {imgArray.map((image) => (
                <div className='uploaded-imgArray' key={image} >
                  <img src={URL.createObjectURL(image)} alt="" width="100" />
                </div>
              ))}
            </div>

          </div>
        </AccordionDetails>
      </Accordion>
      {/* section 4 ends */}


      {/* section 5 */}
      <Accordion>
        <AccordionSummary
          expandIcon={'+'}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ADDITIONAL INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AdditionalInfo additionalDetails={additionalDetails} setAdditionalDetails={setAdditionalDetails}
            err={err} set={setErr} />
        </AccordionDetails>
      </Accordion>
      {/* section 5 ends */}



      <Button type='submit' className='btn' onClick={handleSubmit}>POST</Button>

      {/* </form> */}
    </div>
  )
}
export default PropertyForm