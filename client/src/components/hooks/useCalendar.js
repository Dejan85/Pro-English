import React, { useState } from "react";

const useCalendar = () => {
  let [counter, setCounter] = useState({
    mesec: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [months] = useState([
    "januar",
    "februar",
    "mart",
    "april",
    "maj",
    "jun",
    "jul",
    "avgust",
    "semptembar",
    "oktobar",
    "novembar",
    "decembar",
  ]);
  const getMonth = name => {
    const date = new Date();
    const month = months[counter.mesec++];

    if (name === "+") {
    } else if (name === "-") {
      setCounter(() => {
        return counter - 1;
      });
    }

    return { month, year: date.getFullYear() };
  };

  const getAllDays = (month, year) => {
    const date = new Date(year, month, 0).getDate();
    const date2 = new Date(month).getDate();
    console.log(months[date2]);
    const day = [];

    for (let i = 1; i <= date; i++) {
      day.push(i);
    }

    return day;
  };

  return {
    getMonth,
    getAllDays,
  };
};

export default useCalendar;
