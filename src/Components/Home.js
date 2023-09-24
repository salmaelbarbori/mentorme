import React from 'react';
import Navbar from './Navbar';
import mentorshipLogo from '../Assets/mentorshipLogo.png';
import homebannerbackground from '../Assets/home-banner-background.png';
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
       <Navbar />
       <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={homebannerbackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Find you mentor
          </h1>
          <p className="primary-text">
            Here you will find you mentor either you want to become a software engineer or data scientist, you will find people who made it and who are open to help you make it too!
          </p>
          <button className="secondary-button">
            Contact you mentor <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={mentorshipLogo} alt="" />
        </div>
       </div>
    </div>
  );
};

export default Home;
