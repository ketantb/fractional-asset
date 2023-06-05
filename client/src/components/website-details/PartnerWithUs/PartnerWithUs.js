import React, { useEffect } from "react";
import img from "../../assets/images/carousel1.jpg"
import "./PartnerWithUs.css"
import HowCanWeHelpForm from '../../Components/how-can-we-help-form/HowCanWeHelpForm'

export default function PartnerWithUs() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  return (
    <>
      <main>
        <section className="sec-why">
          <div className="head-sec">
            <h1>Experience the ultimate in comfort</h1>
          </div>
          <div className="why-img">
            <img src={img} alt='' />
          </div>
        </section>
        <section>

        </section>
        <HowCanWeHelpForm />
      </main>
    </>
  );
}