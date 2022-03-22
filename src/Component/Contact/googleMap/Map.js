import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '45.5rem',
  height: '33.125rem'
};

const onLoad= marker=>{
  console.log('marker:',onLoad)
}

const position = {
  lat: 24.894328,
  lng: 91.868090
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyA_zKt5ctyvJUOLtTlCQsboHxyjpDO6dw0'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={12}
      >
        <Marker
       onLoad={onLoad}
       position={position}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)