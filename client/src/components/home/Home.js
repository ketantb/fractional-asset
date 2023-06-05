import { useEffect, useState } from "react";
import './Home.css'
import AssetContainer from "../Asset-Container/asset-container";
import PreLoader from "../../pre-loaders/PreLoader";
import WhyUs from '../website-details/why-us/WhyUs'



const LandingPage = () => {

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])



    return (
        <>
            {(isLoading) ? (<PreLoader />) : (
                <div className='home-wrap'>
                    <AssetContainer />

                    <WhyUs />
                </div>
            )}

        </>

    )
}

export default LandingPage;