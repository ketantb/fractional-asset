import React, { useState } from 'react'
import './stylesheet/Aminities.css'
import { Button, TextField, Typography } from '@mui/material'

// yachtAminities, setYachtAminities, newYachtAminity, setNewYachtAminity
const YachtAminity = ({ newYachtAminity, setNewYachtAminity, yachtAminities, setYachtAminities }) => {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    const handleAminityarray = () => {
        setYachtAminities([...yachtAminities, newYachtAminity])
        setNewYachtAminity('');
        setStatus(false)
    }
    const handleSave = () => {
        console.log(yachtAminities)
        setMsg('Saved')
        setStatus(true)
    }


    return (
        <div className='yachtAminities-wrapper'>
            <div>
                <TextField type='text' size='small' name='yachtAminities' value={newYachtAminity}
                    onChange={(e) => setNewYachtAminity(e.target.value)} label='Aminity' />
                <Button onClick={handleAminityarray}>Add</Button>
                <div>
                    {
                        yachtAminities.map((item, i) => {
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

export default YachtAminity