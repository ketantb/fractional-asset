import React, { useEffect, useState } from 'react'
import './ArtForm.css'
import axios from '../../../helpers/axios';
// import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ArtDetails from './ArtFormSteps/ArtDetails';
import ArtAdditionalInfo from './ArtFormSteps/ArtAdditionalInfo';

import { FaHandPointDown } from "react-icons/fa";

import PreLoader from '../../../pre-loaders/PreLoader'



const Artform = () => {
  const navigate = useNavigate()



  //PROPERTY DETAILS
  const [artData, setArtData] = useState({
    propertyAdType: '', artistName: '', artworkTitle: '',
    medium: '', year: '', dimensions: '', dimensionUnit: '',
    framed: '', condition: '', price: '', totalShares: '',
    availableShares: '', perSharePrice: ''
  })

  //UPLOAD PHOTOS
  const [images, setImages] = useState([]);
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState('')

  useEffect(() => {
    (additionalDetails.length > 1000) ? (setErr(true)) : (setErr(false))
  }, [additionalDetails])
  const [err, setErr] = useState(false)


  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate an asynchronous task
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);





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
        toast.loading('Posting car data')

        try {
          const formData = new FormData();

          //append property data
          for (let key of Object.keys(artData)) {
            formData.append(key, artData[key]);
          }

          //append photos
          images.forEach((image) => {
            formData.append('images', image);
          });

          //append additional data
          formData.append('additionalInfo', additionalDetails);
          const token = localStorage.getItem("token")

          const response = await axios.post('/property-form', formData, {
            headers: {
              authorization: token
            }
          });
          if (response.data.success) {
            toast.dismiss()
            console.log(response.data.property)
            console.log('response ', response.data.property);
            navigate('/my-property')
          }
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
        <Typography className='title' style={{ marginLeft: '0.5rem' }}>SELL OR BUY YOUR ART HERE FOR FREE</Typography>
      </div>


      {/* section1 */}
      <Accordion >
        <AccordionSummary className='accordian'
          expandIcon={'+'}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>ART</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ArtDetails artData={artData} setArtData={setArtData} />
        </AccordionDetails>
      </Accordion>
      {/* section 1 ends */}

      {/* section 4 */}
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={'+'}
        >
          <Typography>UPLOAD ART IMAGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='upload-image-form-wrapper'>
            <p style={{ opacity: '0.6' }}>You can upload upto 8 images only</p>
            <form>
              <input type="file" name="images" multiple onChange={handleFileChange} />
            </form>
            <div className='images-wrapper'>
              {images.map((image) => (
                <div className='uploaded-images' key={image} >
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
          <ArtAdditionalInfo additionalDetails={additionalDetails} setAdditionalDetails={setAdditionalDetails}
            err={err} set={setErr} />
        </AccordionDetails>
      </Accordion>
      {/* section 5 ends */}



      <Button type='submit' className='btn' onClick={handleSubmit}>POST</Button>

      {/* </form> */}
    </div>
  )
}
export default Artform