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
  const [week2] = useState([
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Četvrtak",
    "Petak",
    "Subota",
    "Nedelja"
  ]);
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
  });
  const [currentMonth] = useState({
    month: new Date().getMonth()
  });
  const [currentDay] = useState({
    day: new Date().getDate()
  });

  const { year, month } = currentDate;
  const [currentWeekDay] = useState({
    weekDay: new Date().getDay()
  });
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

  const addEventCalendarRender = (events, calendarHandler) => {
    const setCurrentDateHandler = e => {
      setCurrentDate({
        ...currentDate,
        day: parseInt(e.target.getAttribute("data-date"))
      });

      calendarHandler && calendarHandler();
    };

    // Ovo funkcija nam sluzi da nam otvori prozor preko koga ubacujemo evente
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

    // sortiramo evente po datumima
    events &&
      events.sort((a, b) => {
        return parseInt(a.date.split(" ")[0]) - parseInt(b.date.split(" ")[0]);
      });

    return (
      <div className="calendar">
        <div className="calendar__container">
          <div className="calendar__header">
            {/* {!homeEvents && ( */}
            <div className="calendar__icon" onClick={handleMonthDecrease}>
              <i className="fas fa-chevron-left" />
            </div>
            {/* )} */}
            <p
              className="calendar__p"
              // style={
              //   homeEvents && {
              //     display: "flex",
              //     margin: "0 auto",
              //     alignSelf: "center"
              //   }
              // }
            >{`${showHeaderDate().month} ${showHeaderDate().year}`}</p>
            {/* {!homeEvents && ( */}
            <div className="calendar__icon" onClick={handleMonthIncrease}>
              <i className="fas fa-chevron-right" />
            </div>
            {/* )} */}
          </div>
          <div className="calendar__week">
            <ul className="calendar__list">{weeks()}</ul>
          </div>
          <div className="calendar__day">
            <ul className="calendar__list-2">
              {getAllDaysInMonth().map((item, index) => {
                return (
                  <li
                    // style={homeEvents && { cursor: "default" }}
                    key={index}
                    className={`${
                      item === currentDate.day &&
                      showHeaderDate().month === months[currentMonth.month]
                        ? "calendar__item-2 currentDay "
                        : "calendar__item-2"
                    }`}
                    data-date={item}
                    onDoubleClick={addEventHandler}
                    onClick={setCurrentDateHandler}
                    name="date"
                  >
                    {events &&
                      events.map((item2, index2) => {
                        return (
                          parseInt(item2.date) === item &&
                          months[currentDate.month] ===
                            item2.date.split(" ")[1] && (
                            <div key={index2} className="markerForDay" />
                          )
                        );
                      })}
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
    months,
    currentDay,
    week2,
    currentWeekDay
  };
};

export default useCalendar;
