import React from "react";

const CalendarEventCard = () => {
  return (
    <>
      <div className="calendar__event__card">
        <div className="calendar__event__day">18</div>
        <div className="calendar__event__month">jun</div>
      </div>
      <div className="calendar__event__info">
        <h5 className="calendar__event__h5">Cascovi aktivne konverzacije</h5>
        <i className="far fa-clock" />
        <h5 className="calendar__event__h5">Cascovi aktivne konverzacije</h5>
        <p className="calendar__event__p">
          18. Jun 2010 10:00 - <br />
          18. Jun 2010 12:30
        </p>
      </div>
    </>
  );
};

export default CalendarEventCard;
