import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {

  const apiKey = process.env.REACT_APP_MAPSDIRECTIONS_API_KEY;

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;
