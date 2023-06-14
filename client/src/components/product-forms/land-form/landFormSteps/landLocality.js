import React from 'react'
import './stylesheet/LandLocality.css'


import FormControl from '@mui/material/FormControl';
import { FormLabel, TextField } from '@mui/material'



const LandLocality = ({ landLocality, setLandLocality }) => {

  //HANDLE INPUTS
  const handleInputs = (e) => {
    setLandLocality(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }


  return (
    <div className='property-details-wrapper'>

      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Street" variant="standard"
          name='street' value={landLocality.street} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Landmark" variant="standard"
          name='landmark' value={landLocality.landmark} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="City" variant="standard"
          name='city' value={landLocality.city} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Pincode" variant="standard"
          name='pin' value={landLocality.pin} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="State" variant="standard"
          name='state' value={landLocality.state} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field' style={{ marginTop: '2rem' }}>
        <FormLabel>Nearby places</FormLabel>
        <textarea id="standard-basic" variant="standard"
          style={{ minHeight: '5rem', maxHeight: '10rem' }}
          name='nearbyPlaces' value={landLocality.nearbyPlaces} onChange={handleInputs} />
      </FormControl>

    </div>
  )
}

export default LandLocality