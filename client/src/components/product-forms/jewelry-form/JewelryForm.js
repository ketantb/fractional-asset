import React, { useEffect, useState } from 'react'
import './JewelryForm.css'
import axios from '../../../helpers/axios';
// import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


import { FaHandPointDown } from "react-icons/fa";
import JewelryDetails from './jewelryFormSteps/JewelryDetails';
import JewelryAdditionalInfo from './jewelryFormSteps/AdditionalInfo';




const Jewelryform = () => {
    const navigate = useNavigate()



    //PROPERTY DETAILS
    const [jewelryData, setJewelryData] = useState({
        propertyAdType: '', jewelryType: '', metalType: '',
        gemstones: '', weight: '', weightUnit: '', cut: '',
        clarity: '', color: '', certification: '',
        price: '', totalShares: '', availableShares: '', perSharePrice: ''
    })

    //UPLOAD PHOTOS
    const [images, setImages] = useState([]);
    const [imgUrl, setImgUrl] = useState(false)
    const [finalImgArr, setFinalImgArr] = useState([])
    const handleFileChange = (e) => {
        setImages([...images, ...e.target.files]);
    };

    //ADDITIONL INFORMATION
    const [additionalDetails, setAdditionalDetails] = useState('')


    const token = localStorage.getItem('token')
    //HANDLE SUBMIT
    const handleUploadImages = async (e) => {
        e.preventDefault();
        if (images.length === 0) {
            toast.error("No Image Chosen !")
            return
        }
        let arr = []
        for (let i = 0; i < images.length; i++) {
            const imgData = new FormData()
            imgData.append('upload_preset', 'insta_clone')
            imgData.append('file', images[i])
            await axios.post('https://api.cloudinary.com/v1_1/harshada0611/image/upload', imgData)
                .then(resp => {
                    // console.log(resp);
                    arr.push(resp.data.secure_url)
                })
                .catch(err => console.log(err))
        }
        console.log(arr);
        setFinalImgArr(arr)

        if (arr.length !== 0) {
            setImgUrl(true);
        }
    }


    const handlePost = async () => {
        const data = {
            ...jewelryData,
            imgArr: finalImgArr,
            additionalDetails: additionalDetails
        }
        console.log('data before posting', data)

        try {
            toast.loading('Uploading images. Please wait')

            const response = await axios.post('/jewellery-form', data, {
                headers: {
                    authorization: token
                }
            })

            if (response.data.success) {
                console.log('data saved in db', response)
                toast.dismiss()
                toast.success('Property posted successfully')
            }
            else {
                console.log(response)
                toast.error()
            }
        }
        catch (err) {
            console.log(err)
        }

    }



    useEffect(() => {
        if (imgUrl) {
            handlePost();
        }
        // eslint-disable-next-line
    }, [imgUrl])


    return (
        <div className='property-form-wrapper' >
            {/* <form onSubmit={handleSubmit}> */}
            <div style={{ display: 'flex' }}>
                <div><FaHandPointDown /></div>
                <Typography className='title' style={{ marginLeft: '0.5rem' }}>SELL OR BUY YOUR PROPERTY HERE FOR FREE</Typography>
            </div>


            {/* section1 */}
            <Accordion >
                <AccordionSummary className='accordian'
                    expandIcon={'+'}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>JEWELLERY DETAILS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <JewelryDetails jewelryData={jewelryData} setJewelryData={setJewelryData} />
                </AccordionDetails>
            </Accordion>
            {/* section 1 ends */}

            {/* section 4 */}
            <Accordion>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    expandIcon={'+'}
                >
                    <Typography>UPLOAD JEWELLERY IMAGES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='upload-image-form-wrapper'>
                        <p style={{ opacity: '0.6' }}>You can upload upto 8 images only</p>
                        <form>
                            <input type="file" name="images" multiple onChange={handleFileChange} />
                        </form>
                        <div className='images-wrapper'>
                            {images.map((image) => (
                                <div className='uploaded-images' key={image} >
                                    <img src={URL.createObjectURL(image)} alt="" width="100" />
                                </div>
                            ))}
                        </div>

                    </div>
                </AccordionDetails>
            </Accordion>
            {/* section 4 ends */}


            {/* section 5 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={'+'}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>ADDITIONAL INFORMATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <JewelryAdditionalInfo additionalDetails={additionalDetails} setAdditionalDetails={setAdditionalDetails}
                    />
                </AccordionDetails>
            </Accordion>
            {/* section 5 ends */}



            <Button type='submit' className='btn' onClick={handleUploadImages}>POST</Button>

            {/* </form> */}
        </div>
    )
}
export default Jewelryform