import React from "react";
import { MdDoubleArrow } from 'react-icons/md';
import "./FooterBar.css";
const FooterBar = () => {
  return (
    <footer className="Footer">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left foot">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-5 footImage">
            <img src="https://i.ibb.co/9n5kgb5/Richmond.png" alt="" />
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
            <h5 className="mb-4 font-weight-bold text-white ">About us</h5>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                About us
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Features
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                News
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Menu
              </a>
            </p>
                  </div>
                  
                  <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-5'>
                      <h5 className='mb-4 font-weight-bold text-white '>Company</h5>
                      <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Why richmond? 
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Partner with us 
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Faq 
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Blog 
              </a>
            </p>
                  </div>
                  <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-5'>
                      <h5 className='mb-4 font-weight-bold text-white '>Support </h5>
                      <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
               Support center  
              </a>
            </p>
            <p className="mt-2">
              <a
                href=""
                className="text-white link"
                style={{ textDecoration: "none" }}
              >
                Contact us  
              </a>
            </p>
           
           
          </div>
          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-5'>
            <h5 className='text-white'>Get in touch</h5>
            <input className='mt-3'
              type="email"
              value="Email address"
              style={{padding:'1.5rem',borderRadius:'2rem',border:'none',fontSize:'1.2rem',color:'#A18A65'}} />
            <MdDoubleArrow style={{ marginTop:'-6.4rem',marginLeft:'8rem',color:'#A67C00' }} />
          </div>
              </div>
              <div className="copyright-wrapper">
                        <p>Copyright © 2021 by SDL TECH. All Rights Reserved </p>
                        
                    </div>
      </div>
    </footer>
  );
};

export default FooterBar;
