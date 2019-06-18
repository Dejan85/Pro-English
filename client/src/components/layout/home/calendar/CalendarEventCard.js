import React from "react";

const CalendarEventCard = () => {
  return (
    <>
      <div className="calendar__event__card">
        <div className="calendar__event__day">18</div>
        <div className="calendar__event__month">
          <p>jun</p>
        </div>
      </div>
      <div className="calendar__event__info">
        <h5 className="calendar__event__h5">
          Priprema za polaganje medjunarodnih ispita
        </h5>
        <p className="calendar__event__p">
          <i className="far fa-clock" />
          10:00 - 12:30
        </p>
      </div>
    </>
  );
};

export default CalendarEventCard;
