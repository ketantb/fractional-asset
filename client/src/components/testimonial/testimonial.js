import React, { useState } from 'react';
import './testimonial.css'
import fractionalOwnershipExplained from '../../assets/Fractional Ownership Explained -.mp4'

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/watch?v=4Js1EYLd2vg',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/watch?v=4Js1EYLd2vg',
    },
    {
      id: 3,
      videoUrl: 'https://www.youtube.com/watch?v=4Js1EYLd2vg',
    },
  ];
  
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  }
  
  return (
    <div className="testimonial-slider">
        <h2>Food For Thoughts</h2>
      <div className="video-container">
        {/* <video src={testimonials[activeIndex].videoUrl} controls autoPlay loop /> */}
        <video src={fractionalOwnershipExplained} controls autoPlay loop mute/>
      </div>
      <div className="slider-nav">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`slider-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;