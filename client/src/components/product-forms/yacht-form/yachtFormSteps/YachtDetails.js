import React from 'react'
import './stylesheet/PropertyDetails.css'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material'

const YachtDetails = ({ yachtData, setYachtData }) => {

  //HANDLE INPUTS
  const handleInputs = (e) => {
    setYachtData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return (
    <div className='property-details-wrapper'>

      < FormControl className='form-field'>
        <FormLabel id="demo-row-radio-buttons-group-label">Property Ad Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name='advertiseType' value={yachtData.advertiseType} onChange={handleInputs}>
          <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
          <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
        </RadioGroup>
      </FormControl>

      <FormControl className='form-field'>
        <TextField type='text' id="standard-basic" label="Manufacturer" variant="standard"
          name='manufacturer' value={yachtData.manufacturer} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField type='text' id="standard-basic" label="Model" variant="standard"
          name='model' value={yachtData.model} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField type='number' id="standard-basic" label="Manufactured Year" variant="standard"
          name='manufacturedYear' value={yachtData.manufacturedYear} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField type='number' id="standard-basic" label="Price" variant="standard"
          name='price' value={yachtData.price} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField type='number' id="standard-basic" label="Total Shares" variant="standard"
          name='totalShares' value={yachtData.totalShares} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField type='number' id="standard-basic" label="Available Shares" variant="standard"
          name='availableShares' value={yachtData.availableShares} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField type='number' id="standard-basic" label="Per Share Price" variant="standard"
          name='perSharePrice' value={yachtData.perSharePrice} onChange={handleInputs} />
      </FormControl>
    </div>
  )
}

export default YachtDetails