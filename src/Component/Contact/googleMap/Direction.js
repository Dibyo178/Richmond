import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
//   width: '400px',
//   height: '400px'
width: '52.5rem',
height: '33.125rem'
};



const position = {
  lat: 24.894328,
  lng: 91.868090
};

function Direction() {
    const [directionResponse,setDirectionResponse]=useState(null);
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyA_zKt5ctyvJUOLtTlCQsboHxyjpDO6dw0'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={12}
      >
           <DirectionsService
                  // required

                  options={{ 
                    destination: 'shibgonj sylhet Bangladesh',
                    origin: 'Zindabazer',
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={res=>{
                      if(res!==null){
                          setDirectionResponse(res);
                      }
                  }}
                  
                />
                {
                      directionResponse && <DirectionsRenderer
                      // required
                      options={{ 
                        directions: directionResponse
                      }}
                      
                    />
                  }
       
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)