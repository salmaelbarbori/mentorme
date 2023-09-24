import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
