import React from 'react'
import './stylesheet/Locality.css'


import FormControl from '@mui/material/FormControl';
import { FormLabel, TextField } from '@mui/material'



const Locality = ({ locality, setLocality }) => {

  //HANDLE INPUTS
  const handleInputs = (e) => {
    setLocality(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }


  return (
    <div className='locality-details-wrapper'>

      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Street" variant="standard"
          name='street' value={locality.street} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Landmark" variant="standard"
          name='landmark' value={locality.landmark} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="City" variant="standard"
          name='city' value={locality.city} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Pincode" variant="standard"
          name='pin' value={locality.pin} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="State" variant="standard"
          name='state' value={locality.state} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field' style={{ marginTop: '2rem' }}>
        <FormLabel>Nearby places</FormLabel>
        <textarea id="standard-basic" variant="standard"
          style={{ minHeight: '5rem', maxHeight: '10rem' }}
          name='nearbyPlaces' value={locality.nearbyPlaces} onChange={handleInputs} />
      </FormControl>

    </div>
  )
}

export default Locality