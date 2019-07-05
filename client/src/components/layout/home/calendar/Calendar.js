import React, { useState } from "react";

// Components
import CalendarEventCard from "./CalendarEventCard";
// Hooks
import useCalendarTest from "../../../hooks/useCalendarTest";

const Calendar = () => {
  const { getAllDaysInMonth, showHeaderDate, weeks } = useCalendarTest();
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const { month, year } = showHeaderDate(currentDate);
  const allDays = getAllDaysInMonth(currentDate);

  // handler for calendar header ++
  const handleMonthIncrease = () => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month + 1,
    });

    const counter = 12 - currentDate.month;
    if (counter === 1) {
      setCurrentDate({ ...currentDate, month: currentDate.month - 11 });
    }
  };

  // handler for calendar header --
  const handleMonthDecrease = () => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month - 1,
    });

    if (currentDate.month < 1) {
      setCurrentDate({ ...currentDate, month: 11 });
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__container">
        <div className="calendar__header">
          <div className="calendar__icon" onClick={handleMonthDecrease}>
            <i className="fas fa-chevron-left" />
          </div>
          <p className="calendar__p">{`${month} ${year}`}</p>
          <div className="calendar__icon" onClick={handleMonthIncrease}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
        <div className="calendar__week">
          <ul className="calendar__list">{weeks()}</ul>
        </div>
        <div className="calendar__day">
          <ul className="calendar__list-2">
            {allDays.map((item, index) => {
              return (
                <li key={index} className="calendar__item-2">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="calendar__event">
        <CalendarEventCard />
      </div>
    </div>
  );
};

export default Calendar;
