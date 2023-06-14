import React from 'react';
import './steps.css';

const Steps = () => {
    return (
        <section className='step-wrapper'>
            <h2>Luxury Vacation Shared Ownership</h2>
            <div className="steps-container">
                <div className="step">
                    <div>
                        <h2 className="step-title">Luxurious Vacation Homes</h2>
                        <p className="step-description">Browse through our curated selection of luxurious vacation homes located in the most sought-after holiday destinations. Each property offers an unparalleled experience and is meticulously chosen to meet the highest standards of luxury.</p>
                    </div>
                </div>
                <div className="step">
                    <div>
                        <h2 className="step-title">Become a Co-Owner</h2>
                        <p className="step-description">Through our fractional ownership model, you can become a co-owner of your dream vacation home. We establish a Special Purpose Vehicle (SPV) for each property, and as a co-owner, you will have an equal share in the SPV, granting you 100% ownership rights.</p>
                    </div>
                </div>
                <div className="step">
                    <div>
                        <h2 className="step-title">Enjoy Hassle-Free Ownership</h2>
                        <p className="step-description">Sit back and relax while we take care of every detail. Our dedicated team manages the property's furnishing, property management, repairs, and utilities. You can fully immerse yourself in the luxurious experience without the burden of managing the day-to-day operations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;