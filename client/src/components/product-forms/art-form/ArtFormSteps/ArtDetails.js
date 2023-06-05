import React from 'react'
import './stylesheet/ArtDetails.css'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material'

const ArtDetails = ({ artData, setArtData }) => {

    //HANDLE INPUTS
    const handleInputs = (e) => {
        setArtData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
        <div className='property-details-wrapper'>

            < FormControl className='form-field'>
                <FormLabel>Property Ad Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name='propertyAdType' value={artData.propertyAdType} onChange={handleInputs}>
                    <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                    <FormControlLabel value="Sale" control={<Radio />} label="Sell" />
                </RadioGroup>
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Artist Name" variant="standard"
                    name='artistName' value={artData.artistName} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Art-Work Title" variant="standard"
                    name='artworkTitle' value={artData.artworkTitle} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Medium" variant="standard"
                    name='medium' value={artData.medium} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Year" variant="standard"
                    name='year' value={artData.year} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Dimensions" variant="standard"
                    name='dimensions' value={artData.dimensions} onChange={handleInputs} />
            </FormControl>
            < FormControl className='form-field'>
                <FormLabel className=''>Dimension Unit</FormLabel>
                <select name='dimensionUnit' value={artData.dimensionUnit} onChange={handleInputs} >
                    <option value="">Select</option>
                    <option value="mm">mm</option>
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                    <option value="feets">feets</option>
                </select>
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Framed" variant="standard"
                    name='framed' value={artData.framed} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='text' id="standard-basic" label="Condition" variant="standard"
                    name='condition' value={artData.condition} onChange={handleInputs} />
            </FormControl>

            {/* SHARES DETAILS */}
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price" variant="standard"
                    name='price' value={artData.price} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Total shares" variant="standard"
                    name='totalShares' value={artData.totalShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Available Shares" variant="standard"
                    name='availableShares' value={artData.availableShares} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField type='number' id="standard-basic" label="Price Per Share" variant="standard"
                    name='perSharePrice' value={artData.perSharePrice} onChange={handleInputs} />
            </FormControl>

        </div>
    )
}

export default ArtDetails