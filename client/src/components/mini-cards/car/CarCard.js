import React from 'react'
import './CarCard.css'

const CarCard = () => {
    return (
        <div className="car-card">
            <div className="car-image">
                <img src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="CarImage" />
            </div>
            <div className="car-details">
                <h3 className="car-title">Car Model</h3>
                <p className="  car-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="car-info">Fuel Type: Petrol</p>
                <p className="car-info">Seating Capacity: 5</p>
                <button className='rent'>Rent Now</button>
            </div>
        </div>
    )
}

export default CarCard