import React, { useState } from 'react'
import './stylesheet/Aminities.css'
import { Button, TextField, Typography } from '@mui/material'

const LandUtilities = ({ newUtility, setNewUtility, utilities, setUtilities }) => {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    const handleUtilityarray = () => {
        setUtilities([...utilities, newUtility])
        setNewUtility('');
        setStatus(false)
    }
    const handleSave = () => {
        console.log(utilities)
        setMsg('Saved')
        setStatus(true)
    }


    return (
        <div className='utilities-wrapper'>
            <div>
                <TextField type='text' size='small' name='utilities' value={newUtility}
                    onChange={(e) => setNewUtility(e.target.value)} label='Aminity' />
                <Button onClick={handleUtilityarray}>Add</Button>
                <div>
                    {
                        utilities.map((item, i) => {
                            return (
                                <li key={i + 1}>{item}</li>
                            )
                        })
                    }
                </div>
                {status && <Typography>{msg}</Typography>}
                <Button onClick={handleSave}>save</Button>
            </div>

        </div>
    )
}

export default LandUtilities