import React, { useEffect } from 'react';
import './Aboutus.css'


function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const images = [
        { title: 'TEAM', para: 'Our team comprises highly skilled and knowledgeable individuals with a passion for real estate. We understand that buying or selling a property can be a daunting task, which is why we are committed to making the process as smooth and stress-free as possible for our clients.' },
        { title: 'TECHNOLOGY', para: 'We specialize in providing personalized and professional service, and our team is equipped with the latest technology and market data to ensure that our clients receive the most accurate and up-to-date information.' },
        { title: 'MISSION', para: 'Whether you are looking to buy your first home, sell your current property, or invest in real estate, we are here to guide you every step of the way. Our mission is to help our clients achieve their real estate goals by providing top-notch service, expertise, and support.' },
        { title: 'GOAL', para: 'We take pride in building long-term relationships with our clients, and we are committed to exceeding their expectations. Our goal is to make sure that each and every client is satisfied with our service and confident in their real estate decisions.' }]

    // const [activeIndex, setActiveIndex] = useState(0);

    // const handleSlideChange = (index) => {
    //     setActiveIndex(index);
    // };

    return (
        <div className='aboutus-wrapper'>
            <h5 className='title'>ABOUT FRACTONAL ASSETS</h5>
            <section className='aboutus-body'>
                <div className="aboutus-lb">
                    <div className="">
                        <h6>{images[0].title}</h6>
                        <p>{images[0].para}</p>
                    </div>
                    <div className="">
                        <h6>{images[1].title}</h6>
                        <p>{images[1].para}</p>
                    </div>
                    <div className="">
                        <h6>{images[2].title}</h6>
                        <p>{images[2].para}</p>
                    </div>
                    <div className="">
                        <h6>{images[3].title}</h6>
                        <p>{images[3].para}</p>
                    </div>
                </div>
                <div className="aboutus-rb">
                    {/* <img src={aboutusimg2} alt='aboutusimg' /> */}
                    <img src="https://images.moneycontrol.com/static-mcnews/2018/08/loans.jpg?impolicy=website&width=770&height=431" alt='aboutusimg' />
                    {/* <img src={aboutusimg} alt='aboutusimg'/> */}
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
