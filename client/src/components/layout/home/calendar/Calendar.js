import React, { useState } from "react";

// Components
import Week from "./Week";

// Hooks
import useCalendar from "../../../hooks/useCalendar";

const Calendar = () => {
  const { getMonth, getAllDays } = useCalendar();
  // let [counter, setCounter] = useState(0);

  const handleMonth = e => {
    const name = e.target.getAttribute("name");

    // if (name === "+") {
    //   setCounter(() => {
    //     return counter + 1;
    //   });
    // } else if (name === "-") {
    //   setCounter(() => {
    //     return counter - 1;
    //   });
    // }
    getMonth();
  };

  const day = getAllDays(6, 2019);

  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__icon">
          <i className="fas fa-chevron-left" name="-" onClick={handleMonth} />
        </div>
        <p className="calendar__p">June 2019</p>
        <div className="calendar__icon">
          <i className="fas fa-chevron-right" name="+" onClick={handleMonth} />
        </div>
      </div>
      <div className="calendar__week">
        <ul className="calendar__list">
          <Week />
        </ul>
      </div>
      <div className="calendar__day">
        <ul className="calendar__list-2">
          {day.map((item, index) => {
            return (
              <li key={index} className="calendar__item-2">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
