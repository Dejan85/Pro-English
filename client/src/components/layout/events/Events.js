import React, { useState } from "react";

import Event from "./partials/Event";

const Events = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className="events">
      {reset}
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default Events;
