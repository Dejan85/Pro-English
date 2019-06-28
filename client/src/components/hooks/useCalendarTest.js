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
    "semptembar",
    "oktobar",
    "novembar",
    "decembar",
  ]);
  const [week] = useState([
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Cetvrtak",
    "Petak",
    "Subota",
  ]);

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
      if (i === days) return [...arr, ...arr2];
    }
  };

  return {
    getAllDaysInMonth,
    showHeaderDate,
  };
};

export default useCalendarTest;
