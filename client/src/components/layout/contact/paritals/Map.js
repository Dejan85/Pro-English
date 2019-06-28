import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = () => {
  const map = () => {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 44.814346, lng: 20.458047 }}
        options={{ gestureHandling: "greedy" }}>
        <Marker position={{ lat: 44.814346, lng: 20.458047 }} />
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(map));
  return (
    <div style={{ width: "100%", height: "90rem" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEPkQvhTNGmJPJ5f4YHzhouvVyYtIdr7M`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;
