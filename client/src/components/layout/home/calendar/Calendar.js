import React, { useState } from "react";

// Components
import Week from "./Week";
import Day from "./Day";

// Hooks
import useCalendar from "../../../hooks/useCalendar";

const Calendar = () => {
  const { getMonth } = useCalendar();
  console.log(getMonth(0));

  const handleMonth = e => {
    const xad = e.target.getAttribute("name");
    console.log(xad);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <i className="fas fa-chevron-left" name="-" onClick={handleMonth} />
        <p className="calendar__p">June 2019</p>
        <i className="fas fa-chevron-right" name="+" onClick={handleMonth} />
      </div>
      <div className="calendar__week">
        <ul className="calendar__list">
          <Week />
        </ul>
      </div>
      <div className="calendar__day">
        <Day />
      </div>
    </div>
  );
};

export default Calendar;
