import React from 'react';
import Person1 from "../Assets/person1.png";
import Person2 from "../Assets/person2.png";
import Person3 from "../Assets/person3.png";
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading" style={{ textAlign: 'center' }}>What our mentees are saying</h1>
            <p className="primary-text">
            Thanks to this exceptional mentorship 
            program, I gained valuable insights and 
            skills that have not only boosted my 
            confidence but also opened doors to 
            exciting opportunities in the tech industry.
            </p>
        </div>
        <div className="testimonial-section-bottom" style={{ textAlign: 'center' }}>
            <img src={ Person1 } alt="" />
            <p>
            Thanks to this exceptional mentorship 
            program.
            </p>
            <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2> Mentee Mentee</h2>
        </div>  
    </div>
  );
};

export default Testimonials;
