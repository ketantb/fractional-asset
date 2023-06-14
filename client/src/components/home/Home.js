import { useEffect, useState } from "react";
import './Home.css'
import AssetContainer from "../Asset-Container/asset-container";
import PreLoader from "../../pre-loaders/PreLoader";
import WhyUs from '../website-details/why-us/WhyUs'
import HomeBannerImg from '../../assets/HomeBannerImg.jpg'
import Steps from "../Steps/steps";
import TestimonialSlider from "../testimonial/testimonial";


const LandingPage = () => {

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])



    return (
        <section className="home-wrapper">
            <div className="home-banner">
                <img src={HomeBannerImg} alt='homeImgBanner' />
                <h2>Discover the advantages of fractional ownership
                    <span>Invest in high-value assets without high cost</span>
                </h2>
            </div>
            <div className="featured-category-header">
                <h2>
                    Featured Category
                </h2>
            </div>
            <div className='home-wrap'>
                <AssetContainer />

                <Steps />

                <TestimonialSlider />

                <WhyUs />

            </div>

        </section>

    )
}

export default LandingPage;