import React, { useEffect } from 'react'
import './FAQ.css'
import {Link} from 'react-router-dom'
import Faq from './faq/Faq'


const faqData = [
    {
        question: "How does buying shares in fractional properties work?",
        answer: "Each fractional property is owned by a special purpose vehicle, and this SPV can be owned by up to eight co-owners. You can own up to fours shares in a property of your choice or a share in multiple properties."
    },
    {
        question: "What if my property is booked at the time I want to book it too?",
        answer: "Our process for booking a stay is completely managed through the app, and this helps us ensure complete transparency."

    },
    {
        question: "Is fractional a timeshare or a fractional ownership concept?",
        answer:
            "Fractional is not a timeshare. You will be co-owning an actual asset that has the potential to appreciate over time.."
    },
    {
        question: "How can I book my property to enjoy my holiday?",
        answer:
            "The Fractional mobile app allows you to book your property during available dates, right from your smartphone."
    },
    {
        question: "Can I co-own any property with the people I trust?",
        answer:
            "Yes, as long as shares are available for the home you have in mind, please reach out to us with details about the other people you wish to co-own the home with. On the individual property pages of our websiteyou will be able to see how many shares of a property are available at any given time."
    }
   
];


const FAQs = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    return (
        <div className='faqs-page-wrapper'>
            <div className='left-container'>
                <h3>Frequently Asked Questions</h3>
                <Faq faqData={faqData} />
            </div>
            <div className='right-container'>
                <div className='contactUs-box'>
                    <h1>Have any question ?</h1>
                    <h6>Do get in touch with us, we will be happy to answer all your questions.</h6>
                    <Link to='/enquiry'><button className='btn'>Contact Us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default FAQs