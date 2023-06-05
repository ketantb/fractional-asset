import React from 'react'
import './stylesheet/LandDetails.css'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material'

const LandDetails = ({ LandData, setLandData }) => {

    //HANDLE INPUTS
    const handleInputs = (e) => {
        setLandData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }


    return (
        <div className='property-details-wrapper'>

            < FormControl className='form-field'>
                <FormLabel id="demo-row-radio-buttons-group-label">Property Ad Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name='propertyAdType' value={LandData.propertyAdType} onChange={handleInputs}>
                    <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                    <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
                </RadioGroup>
            </FormControl>

            < FormControl className='form-field'>
                <FormLabel>Land Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name='landType' value={LandData.landType} onChange={handleInputs}>
                    <FormControlLabel value="Residential" control={<Radio />} label="Residential" />
                    <FormControlLabel value="Commercial" control={<Radio />} label="Commercial" />
                </RadioGroup>
            </FormControl>

            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Dimensions" variant="standard"
                    name='dimensions' value={LandData.dimensions} onChange={handleInputs} />
            </FormControl>

            < FormControl className='form-field'>
                <FormLabel className=''>Dimension Unit</FormLabel>
                <select name='dimensionsUnit' value={LandData.dimensionsUnit} onChange={handleInputs}  >
                    <option value="">Select</option>
                    <option value="meters">meters</option>
                    <option value="feets">feets</option>
                </select>
            </FormControl>

            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Lot Size" variant="standard"
                    name='lotSize' value={LandData.lotSize} onChange={handleInputs} />
            </FormControl>

            < FormControl className='form-field'>
                <FormLabel className=''>Lot Size Unit</FormLabel>
                <select name='lotSizeUnit' value={LandData.lotSizeUnit} onChange={handleInputs}  >
                    <option value="">Select</option>
                    <option value="SqMeters">SqMts</option>
                    <option value="SqFeets">SqFts</option>
                    <option value="Acres">acres</option>
                    <option value="Hectare">hectare</option>
                </select>
            </FormControl>

            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Zoning" variant="standard"
                    name='zoning' value={LandData.zoning} onChange={handleInputs} />
            </FormControl>

            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Zone Access" variant="standard"
                    name='roadAccess' value={LandData.roadAccess} onChange={handleInputs} />
            </FormControl>


            {/* SHARES DETAILS */}
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price" variant="standard"
                    name='price' value={LandData.price} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Total shares" variant="standard"
                    name='totalShares' value={LandData.totalShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Available Shares" variant="standard"
                    name='availableShares' value={LandData.availableShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField id="standard-basic" label="Price Per Share" variant="standard"
                    name='perSharePrice' value={LandData.perSharePrice} onChange={handleInputs} />
            </FormControl>

        </div>
    )
}

export default LandDetails