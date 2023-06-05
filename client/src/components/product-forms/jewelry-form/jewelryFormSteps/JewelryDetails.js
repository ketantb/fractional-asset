import React from 'react'
import './stylesheet/JewelryDetails.css'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material'

const JewelryDetails = ({ jewelryData, setJewelryData }) => {

    //HANDLE INPUTS
    const handleInputs = (e) => {
        setJewelryData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
        <div className='property-details-wrapper'>

            < FormControl className='form-field'>
                <FormLabel>Property Ad Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name='propertyAdType' value={jewelryData.propertyAdType} onChange={handleInputs}>
                    <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                    <FormControlLabel value="Sale" control={<Radio />} label="Sell" />
                </RadioGroup>
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Jewelery Type" variant="standard"
                    name='jewelryType' value={jewelryData.jewelryType} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Metal Cut" variant="standard"
                    name='metalType' value={jewelryData.metalType} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Gem Stones" variant="standard"
                    name='gemstones' value={jewelryData.gemstones} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Weight" variant="standard"
                    name='weight' value={jewelryData.weight} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <FormLabel className=''>Weight Unit</FormLabel>
                <select name='weightUnit' value={jewelryData.weightUnit} onChange={handleInputs} >
                    <option value="">Select</option>
                    <option value="gram">gram</option>
                    <option value="carat">carat</option>
                    <option value="tola">tola</option>
                </select>
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Cut" variant="standard"
                    name='cut' value={jewelryData.cut} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Clarity" variant="standard"
                    name='clarity' value={jewelryData.clarity} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Colour" variant="standard"
                    name='color' value={jewelryData.color} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Certification" variant="standard"
                    name='certification' value={jewelryData.certification} onChange={handleInputs} />
            </FormControl>

            {/* SHARES DETAILS */}
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price" variant="standard"
                    name='price' value={jewelryData.price} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Total shares" variant="standard"
                    name='totalShares' value={jewelryData.totalShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Available Shares" variant="standard"
                    name='availableShares' value={jewelryData.availableShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price Per Share" variant="standard"
                    name='perSharePrice' value={jewelryData.perSharePrice} onChange={handleInputs} />
            </FormControl>

        </div>
    )
}

export default JewelryDetails