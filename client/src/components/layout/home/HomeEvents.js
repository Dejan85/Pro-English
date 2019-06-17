import React from "react";

//components
import Calendar from "./calendar/Calendar";

const HomeEvent = () => {
  return (
    <div className="homeEvent">
      <div className="homeEvent__calendar">
        <h3 className="homeEvent__h3">Kalendar dogadjaja</h3>
        <Calendar />
      </div>
      <div className="homeEvent__latest">
        <h3 className="homeEvent__h3">Zadnji dogadjaji</h3>
      </div>
      <div className="homeEvent__upcoming">
        <h3 className="homeEvent__h3">Buduci dogadjaji</h3>
      </div>
    </div>
  );
};

export default HomeEvent;
