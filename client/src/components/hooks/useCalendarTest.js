import React, { useState } from "react";

const useCalendarTest = () => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
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

  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const showCalendar = (month, year) => {
    // const firstDay = new Date(year, month).getDay();
    // const daysInMounth = 32 - new Date(year, month, 32).getDate();
    // console.log(months[month]);
    // console.log(date.getDate());
    // console.log(year);
    // console.log(days);
    // console.log(week[date.getDay()]);
    // let monthIndex = new Date().getMonth();
    // let xad = new Date().getFullYear();
    // const firstDayInMonth = new Date(`${xad}-${monthIndex + 1}-01`).getDay();
  };

  const getAllDaysInMonth = () => {
    const firstDayInMonth = new Date(
      `${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`
    ).getDay();
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
    showCalendar,
    getAllDaysInMonth,
  };
};

export default useCalendarTest;
