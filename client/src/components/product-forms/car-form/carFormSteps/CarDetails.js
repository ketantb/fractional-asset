import React from 'react'
import './stylesheet/CarDetails.css'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material'

const CarDetails = ({ carData, setCarData }) => {

    //HANDLE INPUTS
    const handleInputs = (e) => {
        setCarData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const date = new Date()
    let year = date.getFullYear()
    return (
        <div className='property-details-wrapper'>

            < FormControl className='form-field'>
                <FormLabel>Property Ad Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name='propertyAdType' value={carData.propertyAdType} onChange={handleInputs}>
                    <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                    <FormControlLabel value="Sale" control={<Radio />} label="Sell" />
                </RadioGroup>
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Manufacturer" variant="standard"
                    name='manufacturer' value={carData.manufacturer} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Model" variant="standard"
                    name='model' value={carData.model} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Year" variant="standard"
                    name='year' value={carData.year} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Mileage" variant="standard"
                    name='mileage' value={carData.mileage} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Exterior Color" variant="standard"
                    name='exteriorColor' value={carData.exteriorColor} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Interior Color" variant="standard"
                    name='interiorColor' value={carData.interiorColor} onChange={handleInputs} />
            </FormControl>

            {/* SHARES DETAILS */}
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price" variant="standard"
                    name='price' value={carData.price} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Total shares" variant="standard"
                    name='totalShares' value={carData.totalShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Available Shares" variant="standard"
                    name='availableShares' value={carData.availableShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price Per Share" variant="standard"
                    name='perSharePrice' value={carData.perSharePrice} onChange={handleInputs} />
            </FormControl>

        </div>
    )
}

export default CarDetails