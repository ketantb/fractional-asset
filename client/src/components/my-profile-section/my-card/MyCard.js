import React, { useEffect, useState } from 'react'
import "./MyCard.css"
import { Icon } from 'react-icons-kit'
import { checkmark } from 'react-icons-kit/icomoon/checkmark'
// eslint-disable-next-line
// import { TiArrowForwardOutline } from 'react-icons/ti';
// import { AiOutlineMore } from 'react-icons/ai';
// import { ImCheckmark } from 'react-icons/im';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Button, Typography } from '@mui/material';
import { bin } from 'react-icons-kit/icomoon/bin'
import axios from '../../../helpers/axios'

//npm i swiper;
//npm install react-icons --save

const Mycard = ({ mycard, getpropertylist }) => {
    const navigate = useNavigate()
    const aminities = mycard.aminities.slice(0, 3)


    const [soldOut, setSoldOut] = useState(false)
    const available = mycard.availableShare

    useEffect(() => {
        (available === 0) ? (setSoldOut(true)) : (setSoldOut(false))
        // eslint-disable-next-line
    }, [])



    //handle viewDetails
    const viewDetails = (id) => {
        navigate(`/property-details/${id}`)
        console.log('propertyId', id)
    }


    //HANDLE DELETE
    const token = localStorage.getItem('token')
    const handleDelete = async (id) => {
        console.log('deleteid', id)
        try {
            const response = await axios.delete(`/delete/${id}`, {
                headers: {
                    authorization: token
                }
            })
            if (response.data.message) {
                toast.success(response.data.message)
                getpropertylist();
            }
            else {
                toast.error(response.data.message)
            }
        }
        catch (err) {
            toast.error(toast)
        }
    }

    return (
        <div className="mycard">
            <section className="mycard-col-1" style={
                {
                    background: `url(${mycard.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }
            }>
            </section >
            <section className="mycard-col-2" style={{ marginLeft: '1rem' }}>
                <div className="mycard-col-2-row-1">
                    <Button className='view-more-btn'
                        onClick={() => viewDetails(mycard._id)}>view more</Button>

                    <section className='propertyStatus'>
                        {(soldOut) ? (<Typography className='sold-out' style={{ fontSize: 'medium' }}>SOLD OUT !</Typography>
                        ) : (null)}
                    </section>
                </div>
                <div className='col-2-content' style={{ display: 'flex' }}>
                    <Typography>{mycard.propertyType}</Typography>
                    <Typography style={{ marginLeft: '1.2rem', fontSize: '1.1rem' }}>
                        {/* for {mycard.propertyAdType} */}
                    </Typography>
                </div>
                <div className="mycard-col-2-row-2">
                    <h5>{mycard.street}, {mycard.landmark}, {mycard.city}</h5>
                </div>
                <div className="card-col-2-row-3" style={{ display: 'flex', backgroundColor: 'rgb(250, 245, 245)', padding: '1rem 0.5rem' }}>
                    {aminities.map((aminity, i) => {
                        return (
                            <div className='aminity-item'>
                                <Icon icon={checkmark} className='icon' style={{ color: 'green' }}></Icon>
                                <Typography className='item'>{aminity}</Typography>
                            </div>
                        )
                    })}
                </div>

                <div className='mycard-col-2-col-4'>
                    <p className='additional-details'>
                        {mycard.additionalInfo}
                        {/* <Button className='showMoreBtn' onClick={() =>navigate(`/property-details/${mycard._id}`)}>show more</Button> */}
                    </p>
                </div>

                <div className='deleteIcon'>
                    <Icon icon={bin} size={20} className='icon'
                        onClick={() => handleDelete(mycard._id)}></Icon>
                </div>
            </section >

        </div>

    )
}

export default Mycard;