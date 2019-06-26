import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const [cord] = useState({
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  });
  return (
    <div className="contact__map">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={cord.center}
          defaultZoom={cord.zoom}>
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
