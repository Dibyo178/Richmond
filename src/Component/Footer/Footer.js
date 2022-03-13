import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <div className="body">
             <footer>
            <div className="container">
                <div className="wrapper">
                    <div className="footer-widget">
                        <a href="#">
                           <img className="footerImg" src="https://i.ibb.co/9n5kgb5/Richmond.png" alt="" />
                        </a>
                        <h5 className='desc'>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quas nobis rerum alias distinctio. Voluptatibus.
                        </h5>
                        <ul className='socials'>
                            <li>
                                <a href="#">
                                    <FaFacebookF/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineTwitter/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsInstagram/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaLinkedinIn/>
                                </a>
                             </li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h6>About us</h6>
                        <ul className='links'> 
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Menu</a></li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h6>Company</h6>
                        <ul className='links'> 
                            <li><a href="#">Why Richmond?</a></li>
                            <li><a href="#">Partner with us</a></li>
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h6>Support</h6>
                        <ul className='links'> 
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Contact us</a></li>
                           
                        </ul>
                    </div>
                    
                    </div>
                    <div className="copyright-wrapper">
                        <p>Copyright © 2021 by SDL TECH. All Rights Reserved </p>
                        
                    </div>
             </div>
        </footer>
       </div>
    );
};

export default Footer;