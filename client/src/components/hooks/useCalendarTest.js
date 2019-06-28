import React, { useState } from "react";

const useCalendarTest = () => {
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
    "decembar",
  ]);

  const [week] = useState(["p", "u", "s", "c", "p", "s", "n"]);

  const showHeaderDate = ({ year, month }) => {
    return { month: months[month], year };
  };

  const getAllDaysInMonth = ({ year, month }) => {
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

  return {
    getAllDaysInMonth,
    showHeaderDate,
    weeks,
  };
};

export default useCalendarTest;
