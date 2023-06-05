import React from 'react'
import './stylesheet/CarTechDetails.css'


import FormControl from '@mui/material/FormControl';
import { FormLabel, TextField } from '@mui/material'



const CarTechnicalDetails = ({ carTechDetails, setCarTechDetails }) => {


    //HANDLE INPUTS
    const handleInputs = (e) => {
        setCarTechDetails(prevdraftUnit => ({ ...prevdraftUnit, [e.target.name]: e.target.value }))
    }


    return (
        <div className='carTechDetails-details-wrapper'>

            <FormControl className='form-field'>
                <TextField id="standard-basic" label="Transmission" variant="standard"
                    name='transmission' value={carTechDetails.transmission} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField id="standard-basic" label="Engine Type" variant="standard"
                    name='engineType' value={carTechDetails.engineType} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField id="standard-basic" label="Fuel Type" variant="standard"
                    name='fuelType' value={carTechDetails.fuelType} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField id="standard-basic" label="Drive Train" variant="standard"
                    name='driveTrain' value={carTechDetails.driveTrain} onChange={handleInputs} />
            </FormControl>
            <FormControl className='form-field'>
                <TextField id="standard-basic" label="VIN NO." variant="standard"
                    name='vinNumber' value={carTechDetails.vinNumber} onChange={handleInputs} />
            </FormControl>

        </div>
    )
}

export default CarTechnicalDetails