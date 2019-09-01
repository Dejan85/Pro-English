import React from "react";
import PropTypes from "prop-types";

// component
import Event from "./Event";

const Daily = ({ events, currentDate, months }) => {
  return (
    <div className="">
      {events &&
        events.map((item, index) => {
          const date = item.date.split(" ");
          return (
            months[currentDate.month] === date[1] &&
            currentDate.day === parseInt(date) && (
              <div key={index}>
                <Event item={item} months={months} />
              </div>
            )
          );
        })}
    </div>
  );
};

Daily.propTypes = {
  events: PropTypes.array,
  currentDate: PropTypes.object,
  months: PropTypes.array
};

export default Daily;
