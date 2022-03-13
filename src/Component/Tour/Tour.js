import React from 'react';
import { SiYoutubemusic } from 'react-icons/si';
import './Tour.css';
const Tour = () => {
    return (
        <div className='tour'>
             <br/>
            <p style={{ color: 'white', textAlign: 'center' }}>Watch our luxarious hotel</p>
            <br/>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Take A Tour</h1> <br />
            <br/><br/>
            <SiYoutubemusic className='media' style={{marginLeft:'36rem',color:'yellow',width:'70px',height:'70px',cursor:'pointer'}}/>
         
        </div>
    );
};

export default Tour;