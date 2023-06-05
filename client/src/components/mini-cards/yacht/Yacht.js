import React from 'react'
import './Yacht.css'


const Yacht = () => {
    return (
        <div class="yacht-card">
            <div class="yacht-image" >
                <img src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="yachtImage" />
            </div>
            <div class="yacht-details">
                <h3 class="yacht-title">Beautiful House</h3>
                <p class="yacht-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="yacht-info">Bedrooms: 3</p>
                <p class="yacht-info">Bathrooms: 2</p>
                <p class="yacht-info">Area: 1500 sqft</p>
                <p class="yacht-info">Price: $300,000</p>
                <button className='contact-button'>Contact</button>
            </div>
        </div>
    )
}

export default Yacht