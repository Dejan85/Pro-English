import React, { useState } from "react";

// Components
import Week from "./Week";
import CalendarEventCard from "./CalendarEventCard";
// Hooks
import useCalendarTest from "../../../hooks/useCalendarTest";

const Calendar = () => {
  const { showCalendar, getAllDaysInMonth } = useCalendarTest();
  let [today, setToday] = useState("June 2019");

  // const date = new Date();
  // const currentMonth = date.getMonth();
  // const currentYear = date.getFullYear();
  let counter = 1;
  let xad;

  const firstDayInMonth = new Date(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`
  ).getDay();

  const handleMonthIncrease = e => {
    if (counter > 12) {
      counter = 1;
      xad = xad - counter;
    }

    xad = new Date().getMonth() + counter++;
    console.log(xad);
  };

  const handleMonthDecrease = e => {
    console.log(new Date().getMonth() + counter--);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__icon" onClick={handleMonthDecrease}>
          <i className="fas fa-chevron-left" name="-" />
        </div>
        <p className="calendar__p">{today}</p>
        <div className="calendar__icon" onClick={handleMonthIncrease}>
          <i className="fas fa-chevron-right" name="+" />
        </div>
      </div>
      <div className="calendar__week">
        <ul className="calendar__list">
          <Week />
        </ul>
      </div>
      <div className="calendar__day">
        <ul className="calendar__list-2">
          {getAllDaysInMonth().map((item, index) => {
            return (
              <li key={index} className="calendar__item-2">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="calendar__event">
        <CalendarEventCard />
      </div>
    </div>
  );
};

export default Calendar;
