import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const apiKey = process.env.REACT_APP_MAPSDIRECTIONS_API_KEY;

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const mapStyles = {
    height: "70vh",
    width: "100%",
  };

  // const defaultCenter = {
  //   lat: 41.3851,
  //   lng: 2.1734,
  // };

  return (
    <div className="map" data-cy="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap 
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}
        >
          {currentPosition.lat && <Marker position={currentPosition} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;
