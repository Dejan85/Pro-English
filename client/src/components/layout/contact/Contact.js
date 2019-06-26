import React, { useState } from "react";

// Components
import Map from "./paritals/Map";

const Contact = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className="contact">
      {reset}
      <div className="contact__map">
        <Map />
      </div>
      <div className="contact__content">content</div>
    </div>
  );
};

export default Contact;

// https://www.youtube.com/watch?v=Pf7g32CwX_s
