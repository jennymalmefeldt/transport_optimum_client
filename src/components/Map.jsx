import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button, Form, Container } from "semantic-ui-react";

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

  const mapRoute = async (event) => {
    event.preventDefault();

    const destination = event.target.destination.value;

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };



  const mapStyles = {
    height: "80vh",
    width: "100%",
  };

  // const defaultCenter = {
  //   lat: 41.3851,
  //   lng: 2.1734,
  // };

  return (
    <Container >
    <div className="map" data-cy="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap 
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}>
          {
          currentPosition.lat ?
          <Marker position={currentPosition} 
          onDragEnd={(e) => onMarkerDragEnd(e)}
          draggable={true}/> : null
        }
        </GoogleMap>
      </LoadScript>
    </div>
    <Form data-cy="map" onSubmit={(e) => mapRoute(e)}>
        <Form.Input
          label="Location"
          placeholder="Type in your location"
          name="origin"
          type="input"
          id="from"
          data-cy="from"
          required
        />
        </Form>
        <Button
          data-cy="submit"
          id="submit-route"
          content="Submit Your Route"
          color="green"
        ></Button>
    </Container>
  );
};
export default Map;
