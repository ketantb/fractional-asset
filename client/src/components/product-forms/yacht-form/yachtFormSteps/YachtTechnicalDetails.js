import React from 'react'
import './stylesheet/Locality.css'


import FormControl from '@mui/material/FormControl';
import { FormLabel, TextField } from '@mui/material'



const YachtTechnicalDetails = ({ yachtTechDetails, setYachtTechDetails }) => {


  //HANDLE INPUTS
  const handleInputs = (e) => {
    setYachtTechDetails(prevdraftUnit => ({ ...prevdraftUnit, [e.target.name]: e.target.value }))
  }


  return (
    <div className='yachtTechDetails-details-wrapper'>

      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Length" variant="standard"
          name='length' value={yachtTechDetails.length} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Length Unit" variant="standard"
          name='lengthUnit' value={yachtTechDetails.lengthUnit} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Beam" variant="standard"
          name='beam' value={yachtTechDetails.beam} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Draft" variant="standard"
          name='draft' value={yachtTechDetails.draft} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Draft Unit" variant="standard"
          name='draftUnit' value={yachtTechDetails.draftUnit} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Hull Material" variant="standard"
          name='hullMaterial' value={yachtTechDetails.hullMaterial} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Engine Hours" variant="standard"
          name='engineHours' value={yachtTechDetails.engineHours} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Fuel Type" variant="standard"
          name='fuelType' value={yachtTechDetails.fuelType} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Fuel Capacity" variant="standard"
          name='fuelCapacity' value={yachtTechDetails.fuelCapacity} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Fuel Capacity Unit" variant="standard"
          name='fuelCapacityUnit' value={yachtTechDetails.fuelCapacityUnit} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Water Capacity" variant="standard"
          name='waterCapacity' value={yachtTechDetails.waterCapacity} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Water Capacity Unit" variant="standard"
          name='waterCapacityUnit' value={yachtTechDetails.waterCapacityUnit} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Accomodation Quantity" variant="standard"
          name='accommodationsQty' value={yachtTechDetails.accommodationsQty} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="No. of Cabins" variant="standard"
          name='numberOfCabins' value={yachtTechDetails.numberOfCabins} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="No. of Heads" variant="standard"
          name='numberOfHeads' value={yachtTechDetails.numberOfHeads} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Generator" variant="standard"
          name='generator' value={yachtTechDetails.generator} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Air Conditioning" variant="standard"
          name='airConditioning' value={yachtTechDetails.airConditioning} onChange={handleInputs} />
      </FormControl>
      <FormControl className='form-field'>
        <TextField id="standard-basic" label="Electronics" variant="standard"
          name='electronics' value={yachtTechDetails.electronics} onChange={handleInputs} />
      </FormControl>

    </div>
  )
}

export default YachtTechnicalDetails