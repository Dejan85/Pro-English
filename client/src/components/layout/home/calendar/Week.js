import React, { useState } from "react";

const Week = () => {
  const [week] = useState(["p", "u", "s", "c", "p", "s", "n"]);

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

export default Week;
