import React, { useState } from "react";
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
  const [confrim, setConfirm] = useState(false);

  const deleteEventHandler = () => {
    setConfirm(true);
  };

  // deleteEvent(id);
  return (
    <div className="calendar__event__container">
      {confrim && (
        <div className="confirmBox">
          <p className="confirmBox__p">
            Da li ste sigurni da zelite da obrisete?
          </p>
          <div className="confirmBox__icon">
            <i
              className="fas fa-check"
              style={{ color: "#80C702" }}
              onClick={() => {
                setConfirm(false);
                deleteEvent(id);
              }}
            />
            <i
              className="fas fa-times"
              style={{ color: "#EB1B1B" }}
              onClick={() => {
                setConfirm(false);
              }}
            />
          </div>
        </div>
      )}
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
            // onClick={deleteEvent.bind(this, id)}
            onClick={deleteEventHandler}
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
