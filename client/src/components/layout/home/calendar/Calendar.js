import React, { useState } from "react";

// Components
import Week from "./Week";
import CalendarEventCard from "./CalendarEventCard";
// Hooks
import useCalendarTest from "../../../hooks/useCalendarTest";

const Calendar = () => {
  const { getAllDaysInMonth, showHeaderDate } = useCalendarTest();
  let [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  let { month, year } = showHeaderDate(currentDate);

  const handleMonthIncrease = e => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month + 1,
    });
  };

  const handleMonthDecrease = e => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month - 1,
    });
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__icon" onClick={handleMonthDecrease}>
          <i className="fas fa-chevron-left" name="-" />
        </div>
        <p className="calendar__p">{`${month} ${year}`}</p>
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
          {getAllDaysInMonth(currentDate).map((item, index) => {
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
