import React from 'react';
import './steps.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineChair } from 'react-icons/md';
import { AiOutlineWallet } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsHandThumbsUp } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiShieldQuarter } from 'react-icons/bi';
import { SiYourtraveldottv } from 'react-icons/si';

const HowItWorksSteps = () => {
    return (
        <div className="howitworks-step-container">
            <div className='howitworks-header'>
                <h2>Why Fractional Assets</h2>
                <p>
                Unlock the power of fractional assets and expand your investment opportunities with shared ownership, 
                enabling you to diversify your portfolio and access high-value assets that were once out of reach.
                </p>
            </div>
            <div className="steps-container">
                <div className="step">
                    <div className="step-icon">
                        <AiOutlineShoppingCart />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Easy To Buy</h2>
                        <p className="step-description">Browse and purchase your desired property with ease.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <MdOutlineChair />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Fully Furnished & Professionally Managed</h2>
                        <p className="step-description">Enjoy fully furnished properties with professional property management services.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <AiOutlineWallet />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Low Maintenance Cost</h2>
                        <p className="step-description">Experience affordable maintenance costs for your property.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <AiOutlineStar />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Premium and Exclusive Inventory</h2>
                        <p className="step-description">Explore a selection of premium and exclusive properties.</p>
                    </div>
                </div>
                <div className="step" >
                    <div className="step-icon">
                        <BsHandThumbsUp />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Risk Free and Diversified Investment</h2>
                        <p className="step-description">Invest with confidence in a diversified and risk-free environment.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <AiOutlineBarChart />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">High Returns With High Capital Gains</h2>
                        <p className="step-description">Experience high returns and potential capital gains on your investment.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <SiYourtraveldottv/>
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Unlimited Holidays With Unique Exchange</h2>
                        <p className="step-description">Enjoy unlimited holidays and unique exchange opportunities.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <BiShieldQuarter />
                    </div>
                    <div className="step-content">
                        <h2 className="step-title">Easy To Liquidate</h2>
                        <p className="step-description">Effortlessly liquidate your investment when needed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSteps;