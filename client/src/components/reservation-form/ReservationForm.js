import React from 'react'
import './ReservationForm.css'
import { toast } from 'react-hot-toast'
import { Button, TextField, Typography } from '@mui/material'
import axios from '../../helpers/axios'

const ReservationForm = ({ reservationForm, setReservationForm }) => {

    const handleInputs = (e) => {
        setReservationForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleReservation = async () => {
        console.log(reservationForm)
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const response = await axios.post('/reserve-shares', reservationForm, {
                    headers: {
                        authorization: token
                    }
                })
                if (response.data.success) {
                    toast.success('Your details saved successfully')
                }
                else {
                    response.data.errors.forEach((error) => {
                        toast.error(error.msg)
                    })
                }
            }
            catch (err) {
                console.log(err)
                toast.err(err)
            }
        }
        else {
            toast.error('You have to signin first to reserve shares')
        }

    }


    return (
        <div className='ReservationForm-wrapper'>
            <form className='reservationForm'>
                <TextField label='First Name*' size='small' className='form-item'
                    name='firstname' value={reservationForm.firstname}
                    onChange={handleInputs} />
                <TextField label='Last Name*' size='small' className='form-item'
                    name='lastname' value={reservationForm.lastname}
                    onChange={handleInputs} />
                <TextField label='Email*' size='small' className='form-item'
                    name='email' value={reservationForm.email}
                    onChange={handleInputs} />
                <TextField label='Contact*' size='small' className='form-item'
                    name='contact' value={reservationForm.contact}
                    onChange={handleInputs} />

                <Typography className='shareCount'>How many do you want to buy?*</Typography>
                <TextField type='number' placeholder='How many share do you want to buy?*'
                    className='form-item' size='small'
                    name='noOfShares' value={reservationForm.noOfShares}
                    onChange={handleInputs} />

                <Button variant='contained' color='success' className='reserveBtn'
                    onClick={handleReservation}>Reserve</Button>
            </form>


        </div>
    )
}

export default ReservationForm