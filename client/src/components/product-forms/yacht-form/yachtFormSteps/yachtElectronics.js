import React, { useState } from 'react'
import './stylesheet/Aminities.css'
import { Button, TextField, Typography } from '@mui/material'


const YachtElectronic = ({ newYachtElectronics, setNewYachtElectronics, yachtElectronics, setYachtElectronics }) => {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    const handleAminityarray = () => {
        setYachtElectronics([...yachtElectronics, newYachtElectronics])
        setNewYachtElectronics('');
        setStatus(false)
    }
    const handleSave = () => {
        console.log(yachtElectronics)
        setMsg('Saved')
        setStatus(true)
    }


    return (
        <div className='yachtElectronics-wrapper'>
            <div>
                <TextField type='text' size='small' name='yachtElectronics' value={newYachtElectronics}
                    onChange={(e) => setNewYachtElectronics(e.target.value)} label='Electronics' />
                <Button onClick={handleAminityarray}>Add</Button>
                <div>
                    {
                        yachtElectronics.map((item, i) => {
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

export default YachtElectronic