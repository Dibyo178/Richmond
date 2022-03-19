import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaShower } from 'react-icons/fa';
import { MdOutlineBedroomParent, MdOutlineDesktopWindows } from "react-icons/md";
import { RiCupLine } from "react-icons/ri";
import "./BedRooms.css";

const BedRooms = () => {
  return (
    <div className="room">
      <h1>
        Save an extra 5-10% percent <br /> on every rooms booking
      </h1>

      <div className="cardMain">
        <div className="cardBody ">
          <img
            src="https://i.ibb.co/kgTRN9b/room1.jpg"
            alt=""
            style={{ width: "100%", height:'200px' }}
          />

          <div className="cardIcon">
            <RiCupLine
              style={{
                marginBottom: "12.125rem",
                color:'#E23A45',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }}
            />
            <AiOutlineWifi   style={{
            marginBottom: "12.125rem",
                color:'#6AD6DD',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }} />
            <MdOutlineDesktopWindows   style={{
                marginBottom: "12.125rem",
              color: '#7F77E2',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }} />

          </div>
          <div className="cardContainer">
            <h1>Classic Room</h1>
            <br />
            <div className='room1'>
            <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6 style={{marginLeft:'10px',marginTop:'0.3125rem'}}>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65',marginLeft:'15px'}}/> <h6 style={{marginLeft:'10px',marginTop:'0.3125rem'}}>Attach washroom</h6>
            </div>
            <br/>
            <div className='room2 '>
            <h5>Starting from </h5> <h2>$50/ per night</h2>
            </div>
            
          </div>
          <br />
            <button className="bookButton">Book room now</button>
        </div>

        <div className="cardBody ">
        <img
            src="https://i.ibb.co/xY7Ypzc/room2.jpg"
            alt=""
            style={{ width: "100%" , height:'200px'}}
          />
           <div className="cardIcon">
            <RiCupLine
              style={{
                marginBottom: "12.125rem",
                color:'#E23A45',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }}
            />
            <AiOutlineWifi   style={{
                marginBottom: "12.125rem",
                color:'#6AD6DD',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }} />
            <MdOutlineDesktopWindows   style={{
             marginBottom: "12.125rem",
                color: '#7F77E2',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }} />

        
          </div>
          <div className="cardContainer">
            <h1>Duplex Room</h1>
            <br />
            <div className='room1'>
            <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6 style={{marginLeft:'10px',marginTop:'0.3125rem'}}>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65',marginLeft:'15px'}}/> <h6 style={{marginLeft:'10px',marginTop:'0.3125rem'}}>Attach washroom</h6>
            </div>
            <br/>
            <div className='room2 '>
            <h5>Starting from </h5> <h2>$50/ per night</h2>
            </div>
             
          </div>
          <br />
            <button className="bookButton">Book room now</button>
        </div>

        <div className="cardBody">
          <img
            src="https://i.ibb.co/HxrqJwS/room-3.jpg"
            alt=""
            style={{ width: "100%", height:'200px'}}
          />
           <div className="cardIcon">
            <RiCupLine
              style={{
                marginBottom: "12.125rem",
                color:'#E23A45',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }}
            />
            <AiOutlineWifi   style={{
              marginBottom: "12.125rem",
              color:'#6AD6DD',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }} />
            <MdOutlineDesktopWindows   style={{
                 marginBottom: "12.125rem",
                color: '#7F77E2',
                background: '#fff',
                borderRadius:'50%',
                border: "2px solid #eeeeee",
                fontSize: "45px",
                padding: "9px",
              }} />

        
          </div>
          <div className="cardContainer">
            <h1>Double Room</h1>
            
            <br />
            <div className='room1'>
            <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6 style={{marginLeft:'10px',marginTop:'0.3125rem'}}>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65',marginLeft:'15px'}}/> <h6 style={{marginLeft:'10px',marginTop:'0.3125rem'}}>Attach washroom</h6>
            </div>
            <br/>
            <div className='room2 '>
            <h5>Starting from </h5> <h2>$50/ per night</h2>
            </div>
            
          </div>
          <br />
            <button className="bookButton">Book room now</button>
        </div>

        <div className="cardArrow ">
          <BsFillArrowRightCircleFill
            style={{ width: "3.5rem", height: "3.5rem",color:'#A18A65' }}
          />
        </div>
      </div>
    </div>
  );
};

export default BedRooms;
