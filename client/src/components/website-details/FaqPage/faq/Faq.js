import React, { useState } from "react";
import "./Faq.css";

const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container faq-container">
      {faqData.map((item, index) => (
        <div key={index} className="faq-faqItem">
          <button className="faq-faqButton" onClick={() => handleClick(index)}>
            <p className="question">{item.question}</p>
          </button>
          {activeIndex === index && (
            <div className="faq-faqContent">
              <p className="answer">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
