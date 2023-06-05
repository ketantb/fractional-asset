import React from 'react'
import './Property.css'


const PropertyCard = () => {
    return (
        <div className='minipropertycard-wrap' >
            <div className="box">
                <div className="top">
                    <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg" alt="" />

                </div>
                <div className="bottom">
                    <h3>Home In Merrick Way</h3>
                    {/* <p>
                    Enchanting three bedrooms, three bath home with spacious one
                    bedroom, one bath...
                </p> */}
                    <div className="advants">
                        <div>
                            <span>Bedrooms</span>
                            <div><i className="fas fa-th-large"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Bathrooms</span>
                            <div><i className="fas fa-shower"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Area</span>
                            <div>
                                <i className="fas fa-vector-square"></i>
                                <span>4300<span>Sq Ft</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="price">
                        <span>For Sale</span>
                        <span>$540,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard