import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//redux
import { deleteEvent } from "../../../../redux/actions/fetchEvents";

const CalendarEventCard = ({
  title,
  time,
  description,
  date,
  addEvent,
  deleteEvent,
  id,
  popupHandler
}) => {
  return (
    <div className="calendar__event__container">
      <div className="calendar__event__card">
        <div className="calendar__event__day">{(date && date[0]) || "18"}</div>
        <div className="calendar__event__month">
          <p>{(date && date[1]) || "jun"}</p>
        </div>
      </div>
      <div className="calendar__event__info">
        <h5 className="calendar__event__h5">
          {title || "Priprema za polaganje medjunarodnih ispita"}
        </h5>
        <p className="calendar__event__description">
          {addEvent && description}
        </p>
        <p className="calendar__event__p">
          <i className="far fa-clock" />
          {time || "10:00 - 12:30"}
        </p>
      </div>
      {addEvent && (
        <div className="calendar__event__btn">
          <i
            className="fas fa-edit"
            onClick={popupHandler.bind(this, id, title, time, description)}
          />
          <i
            className="fas fa-trash-alt"
            onClick={deleteEvent.bind(this, id)}
          />
        </div>
      )}
    </div>
  );
};

CalendarEventCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.array,
  addEvent: PropTypes.bool,
  deleteEvent: PropTypes.func,
  id: PropTypes.string,
  popupHandler: PropTypes.func
};

export default connect(
  null,
  { deleteEvent }
)(CalendarEventCard);
