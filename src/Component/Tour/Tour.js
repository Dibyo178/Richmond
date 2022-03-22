import React from 'react';
import { SiYoutubemusic } from 'react-icons/si';
import './Tour.css';
const Tour = () => {
    return (
        <div className='tour'>
     
            <div className='container'>
            <p className='tour2' style={{ color: 'white', textAlign: 'center' }}>Watch our luxarious hotel</p>
            
            <h1 className='tour3' style={{ color: 'white', textAlign: 'center' }}>Take A Tour</h1> 
            {/* <br/><br/> */}
            <SiYoutubemusic className='media' style={{color:'yellow',width:'70px',height:'70px',cursor:'pointer'}}/>
            </div>
         
        </div>
    );
};

export default Tour;