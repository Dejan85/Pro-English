import React, { useState } from "react";

const useCalendar = () => {
  const date = new Date();
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

  const getMonth = counter => {
    const month = months[date.getMonth() + counter];
    return { month, year: date.getFullYear() };
  };

  return {
    getMonth,
  };
};

export default useCalendar;
