import React, { useState } from "react";

const useCalendar = () => {
  const [date, setDate] = useState();
  const [months] = useState([
    "januar",
    "februar",
    "mart",
    "april",
    "maj",
    "jun",
    "jul",
    "avgust",
    "septembar",
    "oktobar",
    "novembar",
    "decembar"
  ]);
  const [week] = useState(["p", "u", "s", "Č", "p", "s", "n"]);
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });

  const { year, month } = currentDate;
  const [popup, setPopup] = useState(false);

  //
  // ─── VRACA NAM DATUM U FORMATU MESEC/GODINA ─────────────────────────────────────
  //

  const showHeaderDate = () => {
    return { month: months[month], year };
  };

  //
  // ─── VRACA NAM SVE DANE U MESECU ────────────────────────────────────────────────
  //

  const getAllDaysInMonth = () => {
    let firstDayInMonth = new Date(`${year}-${month + 1}-01`).getDay();
    let days = new Date(year, month + 1, 0).getDate();

    const arr = [];
    const arr2 = [];
    for (let i = 1; i <= days; i++) {
      if (i < firstDayInMonth) {
        arr.push(" ");
        arr2.push(i);
      } else {
        arr2.push(i);
      }

      if (i === days) {
        const emptyFields = 35 - days + 1;
        const counter = emptyFields - arr.length;

        for (let i = 1; i < counter; i++) {
          arr2.push(" ");
        }

        return [...arr, ...arr2];
      }
    }
  };

  //
  // ─── VRACA NAM DANE U NEDELJI ───────────────────────────────────────────────────
  //

  const weeks = () => {
    return (
      <>
        {week.map((day, index) => {
          return (
            <li key={index} className="calendar__item">
              {day}
            </li>
          );
        })}
      </>
    );
  };

  // handler for calendar header ++
  const handleMonthIncrease = () => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month + 1
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
      month: currentDate.month - 1
    });

    if (currentDate.month < 1) {
      setCurrentDate({ ...currentDate, month: 11 });
    }
  };

  const addEventCalendarRender = () => {
    const addEventHandler = e => {
      if (e.target.getAttribute("data-date") !== " ") {
        let date =
          e.target.getAttribute("data-date") +
          " " +
          showHeaderDate().month +
          " " +
          showHeaderDate().year;
        setDate({ date });
        setPopup(!popup);
      }
    };

    return (
      <div className="calendar">
        <div className="calendar__container">
          <div className="calendar__header">
            <div className="calendar__icon" onClick={handleMonthDecrease}>
              <i className="fas fa-chevron-left" />
            </div>
            <p className="calendar__p">{`${showHeaderDate().month} ${
              showHeaderDate().year
            }`}</p>
            <div className="calendar__icon" onClick={handleMonthIncrease}>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <div className="calendar__week">
            <ul className="calendar__list">{weeks()}</ul>
          </div>
          <div className="calendar__day">
            <ul className="calendar__list-2">
              {getAllDaysInMonth().map((item, index) => {
                return (
                  <li
                    key={index}
                    className="calendar__item-2"
                    data-date={item}
                    onClick={addEventHandler}
                    name="date"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return {
    showHeaderDate,
    getAllDaysInMonth,
    weeks,
    addEventCalendarRender,
    popup,
    setPopup,
    date,
    currentDate,
    months
  };
};

export default useCalendar;
