import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Header.css";

const Header = () => {

  const navToggle = document.querySelector(".nav-toggle");
  navToggle.addEventListener("click", navTogo);

  function navTogo() {
    console.log("hi")
  }

  return (
    <div className="banner">
      <div className="navbar">
        <div className="logoImage">
        <img src="https://i.ibb.co/9hbmV6k/Richmond.png" className="logo" />
       </div>
        
        <button type='button' className='nav-toggle'>
           <span></span>
        </button>
        <nav className='nav'>
        <ul >
            <li>
              <a href="#">Rooms & Suites</a>
            </li>
            <li>
              <a href="#">Booking</a>
            </li>
            <li>
              <a href="#">Facilities</a>
            </li>
            <li>
              <a href="#">Evnents</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            {/* <li><a href="#">Sign in</a></li> */}
            <button className="nav-btn">Sign in</button>
          </ul>
          </nav>
          {/* <ul className="action">
            <div className="menuToggle">
              <ion-icon name="menu-outline"></ion-icon>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </ul> */}
      
      </div>
      <div className="content">
        <h1>A place for relax & freshness</h1>
        <div className="btn">
          <button type="button" className="button">
            <span className="tourBtn"></span>Take a tour{" "}
            <IoIosArrowRoundForward style={{ marginBottom: "0.1rem" }} />{" "}
          </button>
          <button type="button" className="button">
            <span className="tourBtn"></span>Learn More
          </button>
        </div>
      </div>

      {/* date picker */}

      <div className="searchBx">
        <div className="inputBx">
          <p style={{ textAlign: "center" }}>Check in</p>
          <input type="date" />
        </div>
        <div className="inputBx">
          <p style={{ textAlign: "center" }}>Check out</p>
          <input type="date" />
        </div>
        <div className="inputBx">
          <p style={{ textAlign: "center" }}>ROOMS</p>
          <small>
            {" "}
            <ion-icon name="chevron-down-outline"></ion-icon> Double deluxe
          </small>
        </div>
        <div className="inputBx">
          <p style={{ textAlign: "center" }}>GUEST</p>
          <small>
            {" "}
            <ion-icon name="chevron-down-outline"></ion-icon> 1 person
          </small>
        </div>
        <div className="inputBx">
          <button>Check availability</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
