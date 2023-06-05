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


import AdditionalInfo from './yachtFormSteps/AdditionalInfo'

import { FaHandPointDown } from "react-icons/fa";
import YachtDetails from './yachtFormSteps/YachtDetails';
import YachtAminity from './yachtFormSteps/YachtAminities';
import YachtTechnicalDetails from './yachtFormSteps/YachtTechnicalDetails';
import YachtElectronic from './yachtFormSteps/yachtElectronics';



const Yachtform = () => {
  const navigate = useNavigate()



  //YACHT DETAILS
  const [yachtData, setYachtData] = useState({
    advertiseType: '', manufacturer: '', model: '', manufacturedYear: '',
    price: '', totalShares: '',
    availableShares: '', perSharePrice: '',
  })
  //YACHT TECHNICAL DETAILS
  const [yachtTechDetails, setYachtTechDetails] = useState({
    length: '', lengthUnit: '', beam: '', draft: '',
    draftUnit: '', hullMaterial: '', engineType: '',
    engineHours: '', fuelType: '', fuelCapacity: '',
    fuelCapacityUnit: '', waterCapacity: '',
    waterCapacityUnit: '', accommodationsQty: '',
    numberOfCabins: '', numberOfHeads: '', generator: '',
    airConditioning: '', electronics: []
  })
  //AMINTIES
  const [yachtAminities, setYachtAminities] = useState([])
  const [newYachtAminity, setNewYachtAminity] = useState('')

  //ELECTRONICS
  const [yachtElectronics, setYachtElectronics] = useState([])
  const [newYachtElectronics, setNewYachtElectronics] = useState('')

  //UPLOAD PHOTOS
  const [images, setImages] = useState([]);
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
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
    console.log('yachtData => ', yachtData)
    console.log('yachtData =>', yachtTechDetails)
    console.log('yachtData => ', additionalDetails)
    console.log('images =>', images)
    return
    const token = localStorage.getItem('token')
    if (!token) {
      toast.error('Please sign in first')
    }
    else {
      if (additionalDetails.length > 1000) {
        setErr(true)
      }
      else {
        toast.loading('Posting yacht data')

        try {
          const formData = new FormData();

          //append yacht data
          for (let key of Object.keys(yachtData)) {
            formData.append(key, yachtData[key]);
          }

          //append technical data
          for (let key of Object.keys(yachtTechDetails)) {
            formData.append(key, yachtTechDetails[key]);
          }
          //append yachtAminities
          yachtAminities.forEach((aminity, index) => {
            formData.append(`yachtAminities[${index}]`, aminity);
          });
          //append photos
          images.forEach((image) => {
            formData.append('images', image);
          });

          //append additional data
          formData.append('additionalInfo', additionalDetails);
          const token = localStorage.getItem("token")
          console.log(formData)
          return;
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
        <Typography className='title' style={{ marginLeft: '0.5rem' }}>SELL OR BUY YOUR YACHT HERE FOR FREE</Typography>
      </div>


      {/* section1 */}
      <Accordion >
        <AccordionSummary className='accordian'
          expandIcon={'+'}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>YACHT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <YachtDetails yachtData={yachtData} setYachtData={setYachtData} />
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
          <YachtAminity yachtAminities={yachtAminities} setYachtAminities={setYachtAminities} newYachtAminity={newYachtAminity} setNewYachtAminity={setNewYachtAminity} />
        </AccordionDetails>
      </Accordion>
      {/* section 2 ends */}


      <Accordion>
        <AccordionSummary
          expandIcon={'+'}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ELECTRONICS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <YachtElectronic yachtElectronics={yachtElectronics} setYachtElectronics={setYachtElectronics} newYachtElectronics={newYachtElectronics} setNewYachtElectronics={setNewYachtElectronics} />
        </AccordionDetails>
      </Accordion>


      {/* section 3 */}
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={'+'}
        >
          <Typography>TECHNICAL DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <YachtTechnicalDetails yachtTechDetails={yachtTechDetails} setYachtTechDetails={setYachtTechDetails} />
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
          <Typography>UPLOAD YACHT IMAGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='upload-image-form-wrapper'>
            <p style={{ opacity: '0.6' }}>You can upload upto 8 images only</p>
            <form>
              <input type="file" name="images" multiple accept='image' max={8} onChange={handleFileChange} />
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
export default Yachtform