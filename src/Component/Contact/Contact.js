import React from "react";
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import "./Contact.css";
import Direction from "./googleMap/Direction.js";


const Contact = () => {
  return (
    <div className="contactInfo">
      <div className="col-md-6 map">
        <Direction className='direction'/>
        {/* <img src="https://i.ibb.co/ypTv1YY/HILmr.png" alt="" /> */}
      </div>
      <div className="col-md-6 contact">
        <h1>Contact us</h1>
        <div className="city">
          <h5>City</h5>
          <h6>Sylhet 3100 , bangladesh</h6>
        </div>
        <div className="address">
          <h5>Address</h5>
          <h6>
            10th floor Al Hamra Shopping City, Zindabazar,
            <br /> Sylhey -3100
          </h6>
        </div>
        <div className="phone">
          <h5>Phone</h5>
          <h6>+88 013 456 789</h6>
              </div>
              <div className="email">
                  <h5>Email</h5>
                  <h6>www. yourmail@gmail.com</h6>
              </div>
              <div className="social">
                  <h5>Social</h5>
                  <div className='links'>
            <FaFacebookF className='icon' style={{background:'blue'}}/>
            <BsYoutube className='icon' style={{background:'red'}}/>
            <BsInstagram className='icon instagram'/>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Contact;
