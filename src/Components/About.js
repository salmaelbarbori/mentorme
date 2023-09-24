import React from 'react'
import AboutBackgroundImage from "../Assets/MentorshipImage2.jpg";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Mentorship it the ultimate way to get where you want
            </h1>
            <p className="primary-text">
            Mentorship plays a pivotal role in the tech field,
            offering invaluable guidance and support to budding
            professionals. Seasoned mentors provide insights into
            industry trends, helping mentees stay updated and 
            relevant. 
            </p>
            <p className="primary-text">
            Moreover, mentorship fosters a sense of 
            community and collaboration, paving the way for 
            continuous learning and innovation within the
             dynamic tech landscape.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn more</button>
                <buton className="watch-video-button">
                <BsFillPlayCircleFill /> Watch Video
                </buton>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
