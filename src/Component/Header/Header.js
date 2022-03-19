import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import './Header.css';
const Header = () => {
    return (
        <div className="banner">
            <div className='navbar'>
                <img src="https://i.ibb.co/9hbmV6k/Richmond.png" className="logo" />
                <ul>
                    <li><a href="#">Rooms & Suites</a></li>
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#">Evnents</a></li>
                    <li><a href="#">Blog</a></li>
                    {/* <li><a href="#">Sign in</a></li> */}
                    <button className='nav-btn'>Sign in</button>
                </ul>
                
            </div>
            <div className='content'>
                <h1>A place for relax & freshness</h1>
                <div className='btn'>
                    <button type='button'><span></span>Take a tour <IoIosArrowRoundForward style={{marginBottom:'0.1rem'}}/> </button>
                    <button type='button'><span></span>Learn More</button>
                </div>
                </div>

            {/* date picker */}
            
            <div className="searchBx">
            <div className='inputBx'>
                <p style={{textAlign:'center'}}>Check in</p>
                <input type="date" />
            </div>
            <div className='inputBx'>
                <p style={{textAlign:'center'}}>Check out</p>
                <input type="date" />
            </div>
            <div className='inputBx'>
                <p style={{textAlign:'center'}}>ROOMS</p>
                <small> <ion-icon name="chevron-down-outline"></ion-icon> Double deluxe</small>
            </div>
            <div className='inputBx'>
                <p style={{textAlign:'center'}}>GUEST</p>
                <small>  <ion-icon name="chevron-down-outline"></ion-icon> 1 person</small>
                </div>
                <div className='inputBx'>
                <button>Check availability</button>
            </div>
                </div>
                
        
              
        </div>
       
    );
};

export default Header;